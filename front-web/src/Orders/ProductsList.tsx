import ProductCard from './ProductCard'
import './styles.css'
import { Product } from './types';

type Props = {
    products: Product[];                      /* passar como parametro uma lista de produtos */
}

function ProductsList({ products }: Props) {
    return(
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product => (
                    <ProductCard key={product.id} product={product}/>  /* o React precisa saber a chave de cada produto da lista */
                ))}
            </div>
        </div>
    )
}

export default ProductsList;