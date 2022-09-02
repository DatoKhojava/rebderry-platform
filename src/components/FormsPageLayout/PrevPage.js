import { useNavigate } from "react-router-dom";
import "./style.css"

export function PrevPage() {
  const navigate = useNavigate();

  return (
    <button className="previous-page" onClick={() => navigate(-1)}>
      &#8249;
    </button>
  );
}
