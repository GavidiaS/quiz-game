import "./card.css";
import { NavLink } from "react-router-dom";

export default function CategoryCard({ src, category, alt, gradientColor }) {
  return (
    <NavLink to={`/category/${category}`} className={`card_a ${gradientColor}`}>
      <img src={src} alt={alt} />
      <h2>{category}</h2>
    </NavLink>
  );
}
