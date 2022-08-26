import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./footer.css"

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <Container id="footer" fluid>
      <Row>
        <Col className="footer-element" xs={12} sm={6}>
          <h3>ВИРО</h3>
          <p>ГАОУ ДПО ВО ВИРО – институт развития образования.</p>
        </Col>
        <Col className="footer-element" xs={12} sm={6}>
          <h3>Страницы</h3>
          <ul>
            <li>
              <Link className={pathname === "/course" ? "current" : ""} to="/course">
                Курсы
              </Link>
            </li>
            <li>
              <Link
                className={pathname === "/half" ? "current" : ""}
                to="/half"
              >
                Полугодие
              </Link>
            </li>
          
          </ul>
        </Col>
        
      </Row>
      <Row>
        <Col className="footer-element">
          <div>&copy; ВИРО - Проблема этой практики 2022</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;