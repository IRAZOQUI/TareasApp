import React, { useMemo, useState } from 'react'
import '../01-useState/02-useEffect/effects.css'
import{useCounter} from '../../hooks/useCounter'


export const MemoHook = () => {
    
    const { counter,increment }= useCounter(1000);
    const [show, setShow] = useState(true);


    const procesoPesado = (iteraciones) =>{
        for(let i= 0; i < iteraciones ; i++){
            console.log("ahi vamos...");
        }
        return `${iteraciones} iteraciones realizadas `;
    }
    const memroProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <div>
            <h1>Memohook</h1>
            <h3>Counter: <small>{counter}</small>  </h3>
            <hr/>
            <p>{memroProcesoPesado}</p>
            <button className="btn btn-primary"
            onClick={increment}>
                +1
            </button>
            <button className="btn btn-outline-primary ml-2">
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
