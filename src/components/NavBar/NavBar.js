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
                <Grid className="list">
                    <Link href="#">SHOP</Link>
                    <Link href="#">REAL WINTER</Link>
                    <Link href="#">COMPLEMENTOS</Link>
                    <Link href="#">EDITORIALES</Link>
                </Grid>
                <Grid className="search">
                    <input placeholder="BUSCAR" />
                    <img src={search} alt="search" />
                </Grid>
                <Grid className="nav-end">
                    <Link href="#">INGRESAR</Link>
                    <Link href="#">CARRITO</Link>
                    <img className="wallet" src={wallet} alt="wallet" />
                </Grid>
            </Grid>
        </StyledNav>
    )
};

export default NavBar;