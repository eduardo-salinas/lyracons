import { Link, Grid } from '@material-ui/core';
import logo from '../../assets/lyracons-icon.svg';
import wallet from '../../assets/wallet.svg'
import search from '../../assets/search.svg'
import StyledNav from './styled';

const NavBar = () => {
    return (
        <StyledNav>
            <Grid container spacing={1} className="nav">
                <img src={logo} alt="logo" />
                <div className="list">
                    <Link href="#">SHOP</Link>
                    <Link href="#">REAL WINTER</Link>
                    <Link href="#">COMPLEMENTOS</Link>
                    <Link href="#">EDITORIALES</Link>
                </div>
                <div className="search">
                    <input placeholder="BUSCAR" />
                    <img src={search} alt="search" />
                </div>
                <div className="nav-end">
                    <Link href="#">INGRESAR</Link>
                    <Link href="#">CARRITO</Link>
                    <img className="wallet" src={wallet} alt="wallet" />
                </div>
            </Grid>
        </StyledNav>
    )
};

export default NavBar;