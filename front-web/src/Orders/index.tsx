import { toast } from 'react-toastify';
import { useEffect, useState } from 'react'
import { fetchProducts, saveOrder } from '../api';
import Footer from '../Footer';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import ProductsList from './ProductsList'
import StepsHeader from './StepsHeader'
import { Product, OrderLocationData } from './types';
import { checkIsSelected } from './helpers';
import './styles.css'

function Orders() {
    const[products, setProducts] = useState<Product[]>([]); /* inicializar com lista vazia, usando [] */
    const[selectedProducts, setSelectedProducts] = useState<Product[]>([]); /* inicializar com lista vazia, usando [] */
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    const totalPrice = selectedProducts.reduce((sum, item) => {
      return sum + item.price;
    }, 0)

    console.log(products);

    useEffect(() => {                                         /* Executa ao carrega Orders             */
        fetchProducts()
                .then(response => setProducts(response.data))
                .catch(() => {
                  toast.warning('Erro ao listar produtos');
                })
    }, []);

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product);
      
        if (isAlreadySelected) {
          const selected = selectedProducts.filter(item => item.id !== product.id);
          setSelectedProducts(selected);
        } else {
          setSelectedProducts(previous => [...previous, product]);
        }
      }
    
    const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));   /* iterando sobre a lista de produtos selecionados e pegando somente o id */
        const payload = {
          ...orderLocation!,
          products: productsIds                                /* Aqui ocorre o merge do OrderLocation com os 3 atributos mais a lista de productsIds obtidas acima, vai ficar no formato do type OrderPayload */
        }
      
        saveOrder(payload)
          .then((response) => {                                  /* o then é tipo try catch do js, seguinda pela arrow function () => {} */
            toast.error(`Pedido enviado com sucesso! Nº ${response.data.id}` );    /* o response.data.id vem do axios, é o dado retornado da API, vide network em inspect no browser */
            setSelectedProducts([]);
          })
          .catch(() => {
            toast.warning('Erro ao enviar pedido');
          })
      }
      
    return(
        <>
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products} onSelectProduct={handleSelectProduct} selectedProducts={selectedProducts}/>
            <OrderLocation onChangeLocation={location => setOrderLocation(location)} />   
            <OrderSummary amount={selectedProducts.length} totalPrice={totalPrice} onSubmit={handleSubmit}/>
        </div>
        <Footer />
        </>
    )
}

export default Orders;

/* instanciei o products, fiz fetch através do axios pra obter o json do Product[], alimentei no useEffect com setProducts, e repassei o products para o renderizador do ProductsList > ProductsCard */
/* ATENÇÃO: Como o REACT aceita SOMENTE UM ELEMENTO no RETURN, devo usar o <> </> pra retornar MAIS DE UM ELEMENTO */