import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import LogoComponent from '../LogoComponent/LogoComponent'
import { Link } from 'react-router-dom';
import { useCategories } from '../../hooks/useCategories';

function NavBarComponent() {

  const { categories } = useCategories();

  return (
    <Navbar expand="lg" className="bg-body-tertiary, navbar">
      <Container>
      <LogoComponent/>
        <Link to="/">Tienda Tomi</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{color:'black'}} href="/">Home</Nav.Link>
            <Nav.Link style={{color:'black'}} href="#link">Link</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              {categories.map((item, index) => {
                return (
                  <NavDropdown.Item key={index}>
                    <Link to={`/category/${item}`}>{item}</Link>
                  </NavDropdown.Item>
                );
              })};
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <CartWidgetComponent/>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;