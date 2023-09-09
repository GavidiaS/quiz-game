import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header_div">
        <Link to="/">Quiz Game</Link>
      </div>
    </header>
  );
}
