import { Button, FormControlLabel, Grid, Radio, RadioGroup } from '@material-ui/core';
import { useState } from 'react';
import more from '../../assets/more.svg'
import less from '../../assets/less.svg'
import StyledFiltrer from './styled';

const Filtrer = () => {

    const [visual, setVisual] = useState({ size: false, color: false, price: false, season: false, material: false });

    const sizes = ["36", "37", "38", "39", "40", "41"];
    const colors = ["Amarillo", "Blanco", "Hueso", "Marrón", "Negro", "Nude", "Plata", "Rojo", "Suela", "Vision"];
    const prices = ["$2.000 - $3.000", "$3.000 - $4.000"];
    const seasons = ["Invierno", "Verano", "Primavera", "Otoño"];
    const materials = ["Tela", "Algodón"];

    const handleClick = (e) => {
        if (visual[e]) {
            setVisual({ ...visual, [e]: false })
        } else {
            setVisual({ ...visual, [e]: true })
        };
    };

    return (
        <StyledFiltrer>
            <Grid className="filtrer">
                <div className="filtrer-by">FILTRAR POR</div>
            </Grid>
            <Grid className="size">
                <p>Talle</p>
                {visual.size ?
                    <>
                        <Button onClick={() => handleClick("size")}>
                            <img src={less} alt="less" />
                        </Button >
                    </>
                    :
                    <Button onClick={() => handleClick("size")}>
                        <img src={more} alt="more" />
                    </Button >}
            </Grid>
            <Grid className="numb">
                {visual.size && (
                    <RadioGroup >
                        {sizes.map(s =>
                            <FormControlLabel value={s} control={<Radio />} label={s} />)}
                    </RadioGroup>
                )}
            </Grid>
            <Grid className="size">
                <p>Color</p>
                {visual.color ?
                    <>
                        <Button onClick={() => handleClick("color")}>
                            <img src={less} alt="less" />
                        </Button >
                    </>
                    :
                    <Button onClick={() => handleClick("color")}>
                        <img src={more} alt="more" />
                    </Button >}
            </Grid>
            <Grid className="numb">
                {visual.color && (
                    <RadioGroup >
                        {colors.map(s =>
                            <FormControlLabel value={s} control={<Radio />} label={s} />)}
                    </RadioGroup>
                )}
            </Grid>
            <Grid className="size">
                <p>Precio</p>
                {visual.price ?
                    <>
                        <Button onClick={() => handleClick("price")}>
                            <img src={less} alt="less" />
                        </Button >
                    </>
                    :
                    <Button onClick={() => handleClick("price")}>
                        <img src={more} alt="more" />
                    </Button >}
            </Grid>
            <Grid className="numb">
                {visual.price && (
                    <RadioGroup >
                        {prices.map(s =>
                            <FormControlLabel value={s} control={<Radio />} label={s} />)}
                    </RadioGroup>
                )}
            </Grid>
            <Grid className="size">
                <p>Temporada</p>
                {visual.season ?
                    <>
                        <Button onClick={() => handleClick("season")}>
                            <img src={less} alt="less" />
                        </Button >
                    </>
                    :
                    <Button onClick={() => handleClick("season")}>
                        <img src={more} alt="more" />
                    </Button >}
            </Grid>
            <Grid className="numb">
                {visual.season && (
                    <RadioGroup >
                        {seasons.map(s =>
                            <FormControlLabel value={s} control={<Radio />} label={s} />)}
                    </RadioGroup>
                )}
            </Grid>
            <Grid className="size">
                <p>Material</p>
                {visual.material ?
                    <>
                        <Button onClick={() => handleClick("material")}>
                            <img src={less} alt="less" />
                        </Button >
                    </>
                    :
                    <Button onClick={() => handleClick("material")}>
                        <img src={more} alt="more" />
                    </Button >}
            </Grid>
            <Grid className="numb">
                {visual.material && (
                    <RadioGroup >
                        {materials.map(s =>
                            <FormControlLabel value={s} control={<Radio />} label={s} />)}
                    </RadioGroup>
                )}
            </Grid>
        </StyledFiltrer>
    )
};

export default Filtrer;