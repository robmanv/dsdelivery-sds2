import { formatPrice } from './helpers';
import './styles.css'
/* import { ReactComponent as Pizza } from './pizza.svg'; */
import { Product } from './types';

type Props = {
    product: Product;                      /* passar como parametro uma lista de produtos */
    onSelectProduct: (product: Product) => void;
    isSelected: boolean;
}

function ProductCard({ product, onSelectProduct, isSelected }: Props) {
    return(
        <div className={`order-card-container ${isSelected ? 'selected' : ''}`} onClick={() => onSelectProduct(product)}>
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
        </div>
    )
}

export default ProductCard;

/* <Pizza className="order-card-image" /> */