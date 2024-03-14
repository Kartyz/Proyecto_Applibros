import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="links">
        <Link to={"/"} className="footerElement">
          <i className="fa-solid fa-bars"></i>
          <li></li>
        </Link>
        <Link to={"/addBook"} className="footerElement addbook">
          <i className="fa-solid fa-plus"></i>
          <li></li>
        </Link>
        <Link to={"/chat"} className="footerElement chat">
          <i className="fa-solid fa-comment"></i>
          <li></li>
        </Link>

      </div>
    </div>
  );
}

export default Footer;
