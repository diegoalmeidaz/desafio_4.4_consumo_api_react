import rm from "../img/rmiconv2.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className=" align-middle " href="#home">
            <img
              alt=""
              src={rm}
              width="964"
              height="276"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
