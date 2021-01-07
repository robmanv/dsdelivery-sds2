import './styles.css'
/* import { ReactComponent as Pizza } from './pizza.svg'; */
import { Product } from './types';

type Props = {
    product: Product;                      /* passar como parametro uma lista de produtos */
}

function formatPrice(price: number) {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });
    
    return formatter.format(price);
}

function ProductCard({ product }: Props) {
    return(
        <div className="order-card-container">
            <h3 className="order-card-title">
                {product.name}
            </h3>
            <img src={product.imageUri} className="order-card-image" alt={product.name}/>
            <h3 className="order-card-price"> 
                {formatPrice(product.price)}
            </h3>
            <div className="orderCardDescription">
                {product.description}
            </div>

        </div>
    )
}

export default ProductCard;

/* <Pizza className="order-card-image" /> */