import { useEffect, useState } from 'react'
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';
import ProductsList from './ProductsList'
import StepsHeader from './StepsHeader'
import './styles.css'
import { Product, OrderLocationData } from './types';

function Orders() {
    const[products, setProducts] = useState<Product[]>([]); /* inicializar com lista vazia, usando [] */
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

    console.log(products);

    useEffect(() => {                                         /* Executa ao carrega Orders             */
        fetchProducts()
                .then(response => setProducts(response.data))
                .catch(error => console.log(error))
    }, []);

    return(
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products}/>  
            <OrderLocation onChangeLocation={location => setOrderLocation(location)} />   
        </div>
    )
}

export default Orders;

/* instanciei o products, fiz fetch através do axios pra obter o json do Product[], alimentei no useEffect com setProducts, e repassei o products para o renderizador do ProductsList > ProductsCard */