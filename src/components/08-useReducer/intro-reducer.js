

const initialState=[{
    id:1,
    todo: 'comprar pan',
    done:false,
}];

const todoReducer = ( state = initialState, action) =>{

    if(action?.type==='agregar'){
        return[...state,action.payload];
    }

    return state;
}

let todos = todoReducer();


const newTodo ={
    id:2,
    todo: 'comprar leche',
    done:false,
}
//para agregar el nuevo todo tenemos que crear otro arreglo el sera el encargado de ser mandado para que se realice la accion
const agregarTodoAction={
    type:'agregar',
    payload: newTodo,
}

todos = todoReducer ( todos, agregarTodoAction);

console.log(todos);