import { useNavigate } from "react-router-dom";
import "./Card.css";

function OptionCard({ title, description, path }) {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(path)}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default OptionCard;