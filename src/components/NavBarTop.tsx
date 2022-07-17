import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "./NavbarTop.css";
import { Link } from "react-router-dom";

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
      name: "DOSSIERS",
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
    {
      name: "PARTENARIAT",
      drops: [
        { name: "Partenariat nationaux", path: "#pnationaux" },
        { name: "Partenariat étrangers", path: "#petrangers" },
        { name: "Accords & conventions", path: "#accordconv" },
      ],
    },
    {
      name: "COMMUNICATION",
      drops: [
        { name: "Communiqués", path: "#communiques" },
        { name: "Chartes graphiques", path: "#chartesgraphique" },
        { name: "Divers", path: "#divers" },
      ],
    },
  ];

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container key="cont">
        <Navbar.Collapse key="nav1" id="basic-navbar-nav">
          <Nav key="nav12" className="me-auto">
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

          <Nav key="nav2">
            <Link
              key="facebook"
              to="https://www.facebook.com/onecstchad"
              className="facebook social"
            >
              <FontAwesomeIcon key="facebookic" icon={faFacebook} size="2x" />
            </Link>
            <Link key="linkedin" to="#linked" className="linkedIn social">
              <FontAwesomeIcon key="linkedinic" icon={faLinkedin} size="2x" />
            </Link>
            <Link key="twitter" to="#twitter" className="twitter social">
              <FontAwesomeIcon key="twitteric" icon={faTwitter} size="2x" />
            </Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
