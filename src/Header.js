import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/components/alerts">Alerts</Nav.Link>
            <Nav.Link href="/components/breadcrumbs">Breadcrumbs</Nav.Link>
            <Nav.Link href="/components/buttons">Buttons</Nav.Link>
            <Nav.Link href="/components/cards">Cards</Nav.Link>
            <Nav.Link href="/components/carousals">Carousels</Nav.Link>
            <Nav.Link href="/components/dropdowns">Dropdowns</Nav.Link>
            <Nav.Link href="#cards">Modal</Nav.Link>
            <Nav.Link href="#carousal">Navbar</Nav.Link>
            <Nav.Link href="#pricing">Pagination</Nav.Link>
            <Nav.Link href="#pricing">Spinners</Nav.Link>
            <Nav.Link href="#pricing">Tables</Nav.Link>
            <Nav.Link href="#pricing">Spinners</Nav.Link>
            <Nav.Link href="#pricing">Toasts</Nav.Link>

            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;