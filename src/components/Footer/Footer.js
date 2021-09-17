import { Grid, Link } from "@material-ui/core";
import StyledFooter from "./styled";

const Footer = () => {

    return (
        <StyledFooter>
            <Grid className="footer">
                <Grid className="help">
                    <Link href="#"> CLAMBIOS Y DEVOLUCIONES</Link>
                    <Link href="#"> ENVÍOS</Link>
                    <Link href="#"> MEDIOS DE PAGO</Link>
                    <Link href="#"> PREGUNTAS FRECUENTES</Link>
                    <Link href="#"> VENTA MAORISTA</Link>
                </Grid>
                <Grid className="news">
                    <h1>News</h1>
                    <p>Suscribite y entérate de las promos!</p>
                    <input placeholder="Escribí tu Mail" /><br />
                    <button> SUSCRIBITE </button>
                </Grid>
            </Grid>
        </StyledFooter>
    )
};

export default Footer;