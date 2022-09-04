import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import prevPage from "../../assets/prev-page.svg";
import { TitlesContext } from "../../Context";

export function FormsTitle() {
  const navigate = useNavigate();
  const { active } = useContext(TitlesContext);

  return (
    <div className="forms-title">
      <img
        className="prev-button"
        src={prevPage}
        alt="prev-button-svg"
        onClick={() => navigate(-1)}
      />
      <div className="form-title-container">
        <h6 className="form-title active-title">თანამშრომლის ინფო</h6>
        <div className={active ? "active" : ""} />
      </div>
      <div className="form-title-container">
        <h6 className="form-title">ლეპტოპის მახასიათებლები</h6>
        <div className={!active ? "active" : ""} />
      </div>
    </div>
  );
}
