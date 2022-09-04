import React, { useState } from "react";
import { FormsTitle } from "./FormsTitle";
import "./style.css";
import { UserForm } from "./UserForm";
import footer from "../../assets/footer-logo.svg";
import { NotebookForm } from "./NotebookForm";
import { TitlesContext } from "../../Context";

export function FormsPageLayout() {
  const [active, setActive] = useState(true);

  return (
    <div className="forms-container">
      <TitlesContext.Provider
        value={{
          active,
          setActive,
        }}
      >
        <FormsTitle />
        {active ? <UserForm /> : <NotebookForm />}
      </TitlesContext.Provider>
      <div className="footer-container">
        <img className="footer-logo" alt="redberry-footer-logo" src={footer} />
      </div>
    </div>
  );
}
