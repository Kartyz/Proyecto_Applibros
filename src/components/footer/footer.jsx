import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="links">
        <Link to={"/contact"} className="footerElement contact">
          <i className="fa-solid fa-envelope"></i>
          <li></li>
        </Link>
        <Link to={"/faq"} className="footerElement faq">
          <i className="fa-solid fa-circle-question"></i>
          <li></li>
        </Link>
        <Link to={"/"} className="footerElement">
          <i className="fa-solid fa-bars"></i>
          <li></li>
        </Link>
        <Link to={"/addBook"} className="footerElement addbook">
          <i className="fa-solid fa-plus"></i>
          <li></li>
        </Link>
        <Link to={"/register"} className="footerElement register">
          <i className="fa-solid fa-user"></i>
          <li></li>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
