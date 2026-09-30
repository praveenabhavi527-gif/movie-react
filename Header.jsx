import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">Movie Explorer</Link>
        <span className="credit">Data from TMDB</span>
      </div>
    </header>
  );
}
