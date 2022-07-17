import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/UseAuth";
import { IMenus } from "../interfaces/menus.interface";

function NavBarBottom({ menus }: { menus: IMenus }) {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    setAuth(null);
    navigate("connexion");
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" key="gauche">
            {auth?.name
              ? menus.menuLeft.protege.map((menu, key) => {
                  return (
                    <Nav.Link key={key} href={menu.path}>
                      {menu.name}
                    </Nav.Link>
                  );
                })
              : menus.menuLeft.publiq.map((menu, key) => {
                  return (
                    <Nav.Link key={key} href={menu.path}>
                      {menu.name}
                    </Nav.Link>
                  );
                })}
          </Nav>
          <Nav key="droite">
            {auth?.name
              ? menus.menuRight.protege.map((menu, key) => {
                  return (
                    <Nav.Link key={key} href={menu.path} onClick={handleSubmit}>
                      {menu.name}
                    </Nav.Link>
                  );
                })
              : menus.menuRight.publiq.map((menu, key) => {
                  return (
                    <Nav.Link key={key} href={menu.path}>
                      {menu.name}
                    </Nav.Link>
                  );
                })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarBottom;
