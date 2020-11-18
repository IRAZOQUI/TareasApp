import React, { useState } from 'react'
import '../01-useState/02-useEffect/effects.css'
import { MultipleCustomsHooks } from '../03-examples/MultipleCustomsHooks'

export const RealExampleRef = () => {

    
     const [show,setShow] = useState(false)

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr/>
            {show &&  <MultipleCustomsHooks />}

            <button
                className="btn btn-primary my-5"
                onClick={ ()=>{
                    setShow(!show);
                }}
            >
                Show/Hide
            </button>

           



        </div>
    )
}
