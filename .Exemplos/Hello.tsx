import { useEffect } from "react";

type Props = {
    message: string;
}

function Hello({ message }: Props) {

    useEffect(() => {                            //Função do React que recebe 2 parâmetros
        // chamada para API para buscar o produto
        console.log('componente iniciou!');      
    }, []);

    return (
        <h1> Hello {message}!</h1>
    )
}

export default Hello;