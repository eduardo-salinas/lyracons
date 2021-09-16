import { Grid } from '@material-ui/core';
import n from '../../assets/next.svg'
import Filtrer from '../Filtrer/Filtrer';
import StyledHome from './styled';

const Home = () => {
    return (
        <StyledHome>
            <Grid className="title">
                <div className="temp">
                    <img src={n} alt="n" />
                    <p>Invierno 2020</p>
                </div>
                <h1>Título de categoría</h1>
            </Grid>
            <Grid className="products">
                <Filtrer />
            </Grid>
        </StyledHome>
    )
};

export default Home;