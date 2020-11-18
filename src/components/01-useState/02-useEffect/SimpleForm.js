import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:'',
        email:'',
    });
    const { name , email} = formState;



    useEffect(() => {//es un hook que nos permite realizar un efecto cuando se dispara nuestro hook
        console.log('HEY');
    },[]);//con [] al final indicamos que solo se dispare la prime vez 

    const handleInputChange = ({target}) =>{
       setFormState({
           ...formState,
           [target.name]: target.value
       })
    }

    return (
        <>
            <h1>use Effect</h1>
            <hr/>
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}

                />

            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="TuEmail@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}

                />

            </div>


            { (name === '123') && <Message /> }

        </>
    )
}
