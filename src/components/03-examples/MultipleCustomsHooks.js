import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../01-useState/02-useEffect/effects.css'

export const MultipleCustomsHooks = () => {

    const {counter,increment}=useCounter (1);

    const {loading,data}= useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote} =!!data && data[0]; //operacion logica para que no marque indefinido si no hay datos
    console.log(author, quote);
    return (
        <div>
            <h1>BreackingBad Quotes</h1>
            <hr/>

            {
                loading?
               (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>

                )
                :
                (
                    <blockquote className="blockquote text-right">
                        <p className="mb-0"> {quote}</p>
                        <footer className="blockquote-footer"> {author}</footer>
                        <button 
                            className="btn btn-primary"
                            onClick={increment}
                        >
                        Siguiente Frase
                        </button>
                    </blockquote>

                )
            }

        </div>
    )
}
