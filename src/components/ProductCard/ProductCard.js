import { Paper } from "@material-ui/core";
import img from '../../assets/product.jpg'
import StyledCard from "./styled";

const ProductCard = ({ product }) => {
    return (
        <StyledCard>
            <Paper elevation={0}>
                {product.imageSrc ? <img src={product.imageSrc} alt="imageSrc" /> :
                    <img src={img} alt="imageSrc" />}
                <p className="name">{product.name}</p>
                <div className="prices">
                    {product.listPrice && <p className="listPrice">{"$"+product.listPrice}</p>}
                    <p className="bestPrice">{"$"+product.bestPrice}</p>
                </div>
                {product.fees && <p className="fees">{"Hasta " + product.fees + " cuotas sin interes"} </p>}
            </Paper>
        </StyledCard >
    )
};

export default ProductCard;