import { Grid, Button } from '@material-ui/core';
import StyledFiltredMobile from './styled';
import close from '../../assets/close.svg'
import row from '../../assets/row.svg'

const FiltrerMobile = () => {

    return (
        <StyledFiltredMobile>
            <Grid>
                <Button className="menu-button" variant="outlined" href="#modal">FILTRÁ POR +</Button>
                <Grid id="modal" className="modal">
                    <Grid className="modal-container">
                        <Grid className="modal-top">
                            <h1>Filtrá por: </h1>
                            <a href="#"><img src={close} alt="" /></a>
                        </Grid>
                        <Grid className="modal-size">
                            <p>Talle: </p>
                            <ToggleButtonGroup
                                exclusive
                                aria-label="text alignment"
                            >
                                <ToggleButton value="left" aria-label="left aligned">
                                    36
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Grid>
                    </Grid>
                </Grid>
                <Button className="menu-button" variant="outlined">ORDENÁ POR <img src={row} alt="alt" /></Button>
            </Grid>
        </StyledFiltredMobile >
    )
};

export default FiltrerMobile;