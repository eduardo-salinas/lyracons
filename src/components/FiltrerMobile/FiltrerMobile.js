import { Grid, Button, Checkbox, FormControlLabel } from '@material-ui/core';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import StyledFiltredMobile from './styled';
import close from '../../assets/close.svg'
import row from '../../assets/row.svg'
import { useState } from 'react';
import { Box } from '@mui/system';

const FiltrerMobile = () => {

    const [alignment, setAlignment] = useState('36');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <StyledFiltredMobile>
            <Grid>
                <Button className="menu-button" variant="outlined" href="#modal">FILTRÁ POR +</Button>
                <Grid id="modal" className="modal">
                    <Grid className="modal-container">
                        <Grid className="modal-top">
                            <h1>Filtrá por: </h1>
                            <a href="#1"><img src={close} alt="" /></a>
                        </Grid>
                        <Grid className="modal-size">
                            <p>Talle: </p>
                            <ToggleButtonGroup exclusive value={alignment} className="all-sizes" onChange={handleChange}>
                                <ToggleButton value="36" className="name-size">36</ToggleButton>
                                <ToggleButton value="37" className="name-size">37</ToggleButton>
                                <ToggleButton value="38" className="name-size">38</ToggleButton>
                                <ToggleButton value="39" className="name-size">39</ToggleButton>
                                <ToggleButton value="40" className="name-size">40</ToggleButton>
                                <ToggleButton value="41" className="name-size">41</ToggleButton>
                            </ToggleButtonGroup>
                        </Grid>
                        <Grid className="modal-color">
                            <p>Color: Animal print negro</p>
                            <Grid className="all-colors">
                                <Box className="box-1"></Box>
                                <Box className="box"></Box>
                                <Box className="box"></Box>
                            </Grid>
                        </Grid>
                        <Grid className="modal-price">
                            <p>Precio:</p>
                            <Grid className="all-prices">
                            <FormControlLabel  control={<Checkbox defaultChecked color="default"className="check" />} label="$2.000 - $3.000" />
                            <FormControlLabel  control={<Checkbox defaultChecked color="default"className="check" />} label="$3.000 - $4.000" />
                            </Grid>
                        </Grid>
                        <Button variant="outlined" className="apply">Aplicar</Button>
                    </Grid>
                </Grid>
                <Button className="menu-button" variant="outlined">ORDENÁ POR <img src={row} alt="alt" /></Button>
            </Grid>
        </StyledFiltredMobile >
    )
};

export default FiltrerMobile;