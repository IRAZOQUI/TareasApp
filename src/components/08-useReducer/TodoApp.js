

import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm';
import '../08-useReducer/style.css'
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';



const init = () =>{
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false,
    // }];
    
    return JSON.parse( localStorage.getItem('todos')) || [];

}

export const TodoApp = () => {


    const handleSubmit = (e) =>{
        if (description.trim().length <=1){
            return;
        }
        e.preventDefault();
        //console.log("nueva tarea");

        const newTodo={
            id: new Date().getTime(),
            desc: description,
            done: false,
        };
        const action={
            type: 'add',
            payload: newTodo,
        };

        dispatch(action);//es un disparador que manda la accion que queremos realizar
        reset();
    }





    const [ todos, dispatch ] = useReducer(todoReducer, [], init);
   

    const [{description}, handleInputChange , reset] = useForm({
        description: '',
    });

    
    useEffect(()=>{//usare el useffect para cuando exista un cambio de todos se guarden en el localStorage
        localStorage.setItem('todos',JSON.stringify(todos))//el localStorage solo guarda strings por lo que tendremos que convertir nuestro objeto en strings con la funcion de json
    },[todos]);
    //console.log(description);

    const handleDelet = (todoId) =>{
        
         const action={
             type: 'delete',
             payload: todoId
         };

         dispatch(action);//es un disparador que manda la accion que queremos realizar
        // reset();
    } 

    const handletoggle = (todoId) =>{
        
         const action={
             type: 'toggle',
             payload: todoId
         };

         dispatch(action);//es un disparador que manda la accion que queremos realizar
        // reset();
    } 

    return (
        <div>
            <h1>Tareas ({todos.length})</h1>
            <hr/>

            <div className="row">


                <div className="col-7">
 
                    <TodoList 
                        todos={todos}
                        handleDelet ={handleDelet}
                        handletoggle={handletoggle}

                    />
                    

                </div>
                <div className="col-5">
                    <h4>Agregar Tareas</h4>
                    <hr/>
                    

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Tarea ..."
                            autoComplete="off"
                            value={description}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                        >
                            Agregar
                        </button>
                    </form>

                </div>

            </div>

           
        </div>
    )
}
