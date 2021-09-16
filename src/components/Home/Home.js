import { Button, Grid } from '@material-ui/core';
import { useState } from 'react';
import next from '../../assets/next.svg';
import prev from '../../assets/prev.svg';
import products from '../../pruducts.js';
import moreProducts from '../../moreProducts';
import Filtrer from '../Filtrer/Filtrer';
import ProductCard from '../ProductCard/ProductCard';
import StyledHome from './styled';
import FiltrerMobile from '../FiltrerMobile/FiltrerMobile';

const Home = () => {
    
    const [more, setMore] = useState(false);

    return (
        <StyledHome>
            <Grid className="title">
                <Grid className="season">
                    <img src={next} alt="next" />
                    <p>Invierno 2020</p>
                </Grid>
                <Grid className="season-mobile">
                    <img src={prev} alt="prev" />
                    <p>Invierno 2020</p>
                </Grid>
                <h1>Título de categoría</h1>
                <FiltrerMobile/>
            </Grid>
            <Grid className="all">
                <Filtrer />
                <Grid>
                    <Grid className="top">
                        <p>{products.length + " PRODUCTOS"}</p>
                        <p className="order">ORDERNAR POR: Relevancia <select /></p>
                    </Grid>
                    <Grid className="products">
                        {products && products.map(p =>
                            <ProductCard product={p} />
                        )}
                    </Grid>
                    <Grid className="more">
                        {more ? <>
                            <Grid className="products">
                                {moreProducts.products.map(p => <ProductCard product={p} />)}
                            </Grid>
                            <button  onClick={() => setMore(false)}>Ver menos productos</button>
                        </> :
                            <button  onClick={() => setMore(true)}>Ver más productos</button>}
                    </Grid>                    
                </Grid>
            </Grid>
        </StyledHome>
    )
};

export default Home;