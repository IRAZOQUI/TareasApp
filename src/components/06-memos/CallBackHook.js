import React, { useCallback, useEffect, useState } from 'react'
import '../01-useState/02-useEffect/effects.css'
import { ShowIncrement } from './ShowIncrement'

export const CallBackHook = () => {


    const [counter, setCounter] = useState(10)

    //const increment= () =>{
    //    setCounter(counter + 1);
    //}
     

    const increment = useCallback((num) => {//con este hook evitamos que se este renderizando siempre que se cambie su valor y se le envie a un componente hijo
            setCounter(c => c + num);
        },[setCounter]
    )

        


    return (
        <div>
            <h1>Call Back Hook: {counter}</h1>
            <hr/>
            <ShowIncrement increment={increment} />
        </div>
    )
}
