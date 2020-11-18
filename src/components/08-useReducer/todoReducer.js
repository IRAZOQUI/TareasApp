

export const todoReducer=( state=[], action ) =>{
    switch (action.type) {
        case 'add':
            
           return [...state,action.payload] ;

        case 'delete':
            
            return state.filter(todos => todos.id !== action.payload) ;//filter regresa un nuevo arreglo osea que podemos especificar que cosas queremos que regrese el nuevo arregloe
        
        case 'toggle':
            return state.map( todo =>{

                if(todo.id === action.payload){
                    return{
                        ...todo,
                        done: !todo.done//negamos el estado para cambiarlo
                    }   
                }else{
                    return todo;
                }

            });
    
        default:
            return state;
    }
}