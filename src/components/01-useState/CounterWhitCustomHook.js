import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWhitCustomHook = () => {
 
    const {state : estado, increment, reset, decrement} = useCounter();
    return (
        <>
        <h1>Counter Whit Hook: {estado}</h1>
        <hr/>
            <button onClick={increment} className="btn">+1</button>
            <button onClick={reset} className="btn">Reiniciar</button>
            <button onClick={decrement} className="btn">-1</button>
        </>
    )
}
