import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../assets/lyracons-icon.svg';
import wallet from '../../assets/wallet.svg'
import search from '../../assets/search.svg'
import StyledNav from './styled';

const NavBar = () => {
    return (
        <StyledNav>
            <Navbar >
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt="logo" /></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">SHOP</Nav.Link>
                        <Nav.Link href="#features">REAL WINTER</Nav.Link>
                        <Nav.Link href="#pricing">COMPLEMENTOS</Nav.Link>
                        <Nav.Link href="#pricing">EDITORIALES</Nav.Link>
                    </Nav>
                    <div className="search">
                        <input placeholder="BUSCAR" />
                        <img src={search} alt="search" />
                    </div>
                    <div className="nav-end">
                        <Nav.Link href="#pricing">INGRESAR</Nav.Link>
                        <Nav.Link href="#pricing">CARRITO</Nav.Link>
                    </div>
                        <img src={wallet} alt="wallet" />
                </Container>
            </Navbar>
        </StyledNav>
    )
};

export default NavBar;