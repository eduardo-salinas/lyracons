import { Grid } from '@material-ui/core';
import StyledFiltrer from './styled';

const Filtrer = () => {
    return (
        <StyledFiltrer>
            <Grid className="filtrer">
                <div className="for">FILTRAR POR</div>
            </Grid>
        </StyledFiltrer>
    )
};

export default Filtrer;