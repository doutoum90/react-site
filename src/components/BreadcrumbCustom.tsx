import { Breadcrumb, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export function BreadcrumbCustom() {
  const location = useLocation();
  const routes = location.pathname.split("/").slice(1);

  return (
    <>
      <Container>
        <Breadcrumb>
          {routes.map((route) => {
            return (
              <Breadcrumb.Item key={route} href={"/" + route}>
                {route}
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </Container>
    </>
  );
}
