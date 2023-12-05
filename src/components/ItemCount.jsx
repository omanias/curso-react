import { useState } from 'react'

const ItemCount = () => {


    const [contador, setContador] = useState(0)

    const sumar = () => {

        if (contador === 0) {
            setContador(contador + 1)
        }
    }

    return (
        <div>



            <h2>Contador</h2>

            <h3>{contador}</h3>

            <button onClick={sumar}>+</button>
            <button onClick={() => setContador(contador - 1)}>-</button>


        </div>
    )
}

export default ItemCount