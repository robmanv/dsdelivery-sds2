import ProductCard from './ProductCard'
import './styles.css'
import { Product } from './types';
import { checkIsSelected } from './helpers';

type Props = {
    products: Product[];                      /* passar como parametro uma lista de produtos */
    selectedProducts: Product[];
    onSelectProduct: (product: Product) => void;
}

function ProductsList({ products, selectedProducts, onSelectProduct }: Props) {
    return(
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product => (
                    <ProductCard key={product.id} 
                    product={product}
                    onSelectProduct={onSelectProduct}
                    isSelected={checkIsSelected(selectedProducts, product)}            
                    />  /* o React precisa saber a chave de cada produto da lista */
                ))}
            </div>
        </div>
    )
}

export default ProductsList;