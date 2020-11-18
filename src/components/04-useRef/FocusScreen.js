import React, { useRef } from 'react'
import '../01-useState/02-useEffect/effects.css'
export const FocusScreen = () => {



    const inputRef = useRef();

    const handleClick = () =>{
        inputRef.current.select();//de esta forma se hace referencia y es mas facil
       // document.querySelector('input').select();//podemos cambiar el select por alguna otra cosas como focus

    }
    return (
        <div>
            <h1>FocusScreen</h1>
            <hr/>
            <input
                ref={inputRef}
                className="form-control"
                placeholder="Su nombre"
            />

            <button 
            className="btn btn-outline-primary mt-5"
            onClick={handleClick}
            >
                Focus
            </button>

        </div>
    )
}
