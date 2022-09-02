import "./style.css";
import { FormsTitle } from "./FormsTitle";
import { UserForm } from "./UserForm";
import footer from "../../assets/footer-logo.svg";
import { NotebookForm } from "./NotebookForm";

export function FormsPageLayout() {
  return (
    <div className="forms-container">
      <FormsTitle />
      {/* <UserForm /> */}
      <NotebookForm />
      <div className="footer-container">
        <img className="footer-logo" alt="redberry-footer-logo" src={footer} />
      </div>
    </div>
  );
}
