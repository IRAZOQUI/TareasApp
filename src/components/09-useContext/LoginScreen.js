import React, { useContext, useState } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    const {setUser} = useContext(UserContext)
    const user2={
        id:421245,
        name:'Erick',
    };

    return (
        <div>
            <h1>Login Screen</h1>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={()=>setUser({
                    id:1231,
                    name:'Erick'
                })}
            >
                Login
            </button>
        </div>
    )
}
