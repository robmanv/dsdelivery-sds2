import { useState } from "react"

function Counter() {

    const [counter, setCounter] = useState(0);  //sempre valor e função pra mudar o valor

    const handleIncrease = () => {
        console.log('incrementar')
        setCounter(counter + 1);
    }

    const handleDecrease = () => {
        console.log('decrementar')
        setCounter(counter - 1);
    }
    
    return(
        <div>
            <button onClick={handleIncrease}> Incrementar </button>
            <button onClick={handleDecrease}> Decrementar </button>
            <h1> Valor do contador: {counter} </h1>
        </div>
    )
}

export default Counter;