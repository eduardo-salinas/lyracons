import StyledHeader from "./styled";
import { Grid } from '@material-ui/core';

const Header = () => {
    return (
        <StyledHeader>
            <Grid className="header">
                <h1>¡Aprovechá la promo!</h1>
                <h3>Comprá hasta 12 cuotas sin interés</h3>
            </Grid>
        </StyledHeader>
    )
};

export default Header