import { Grid } from '@material-ui/core';
import { useState } from 'react';
import n from '../../assets/next.svg';
import products from '../../pruducts.js';
import moreProducts from '../../moreProducts';
import Filtrer from '../Filtrer/Filtrer';
import ProductCard from '../ProductCard/ProductCard';
import StyledHome from './styled';

const Home = () => {
    const [more, setMore] = useState(false);
    console.log(moreProducts)
    return (
        <StyledHome>
            <Grid className="title">
                <div className="temp">
                    <img src={n} alt="n" />
                    <p>Invierno 2020</p>
                </div>
                <h1>Título de categoría</h1>
            </Grid>
            <Grid className="all">
                <Filtrer />
                <Grid>
                    <Grid className="top">
                        <p>{products.length + " PRODUCTOS"}</p>
                        <p>ORDERNAR POR: Relevancia <select /></p>
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