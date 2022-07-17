import { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import "./NavbarTop.css";

export default function NavBarTop() {
  const [show, setShow] = useState(false);
  const showDropdown = (e: any) => {
    setShow(!show);
  };
  const hideDropdown = (e: any) => {
    setShow(false);
  };
  const menusDrops = [
    {
      name: "Dossiers",
      drops: [
        { name: "Audit de diplômes", path: "#audit" },
        { name: "Integration", path: "#integration" },
        { name: "Gouvernance", path: "#gouvernance" },
        { name: "Divers", path: "#divers" },
      ],
    },
    {
      name: "TEXTES",
      drops: [
        { name: "status", path: "#status" },
        { name: "Reglements Interieurs", path: "#reglementint" },
        { name: "Actes administratives", path: "#acteadminis" },
        { name: "Manuel de procedure", path: "#acteadminis" },
        { name: "Diverses documentations", path: "#diversdoc" },
      ],
    },
  ];
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menusDrops.map((drop) => {
              return (
                <>
                  <NavDropdown
                    key={drop.name}
                    title={drop.name}
                    id="basic-nav-dropdown"
                    show={show}
                    onMouseEnter={showDropdown}
                    onMouseLeave={hideDropdown}
                    renderMenuOnMount={true}
                  >
                    {drop.drops.map((d) => {
                      return (
                        <>
                          <NavDropdown.Item key={d.name} href={d.path}>
                            {d.name}
                          </NavDropdown.Item>
                        </>
                      );
                    })}
                  </NavDropdown>
                </>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
