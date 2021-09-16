import { Grid, Button } from '@material-ui/core';
import StyledFiltredMobile from './styled';
import row from '../../assets/row.svg'

const FiltrerMobile = () => {
    return (
        <StyledFiltredMobile>
            <Grid>
                <Button variant="outlined">FILTRÁ POR +</Button>
                <Button variant="outlined">ORDENÁ POR <img src={row} alt="alt" /></Button>
            </Grid>
        </StyledFiltredMobile>
    )
};

export default FiltrerMobile;