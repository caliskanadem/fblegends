import { Container } from "react-bootstrap";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <Container>
      <img src={logo} alt="nba-logo" width="160px" />
      <h1 className="my-2 font-monospace display-4 fw-bold">
        <span className="text-primary">FENERBAHÇE</span>
        <span className="text-warning">Legends</span>
      </h1>
    </Container>
  );
};

export default Header;
