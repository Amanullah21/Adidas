export const ADD_TODO_ITEM = "ADD_TODO_ITEM";
export const GET_TODO_ITEMS = "GET_TODO_ITEMS";
export const FETCHED_TODO_ITEMS = "FETCHED_TODO_ITEMS"
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT"

export const addTodoItem = (data) => ({
    type: ADD_TODO_ITEM,
    payload: data
});

export const fetchedTodos = (todos) => ({
    type: FETCHED_TODO_ITEMS,
    payload: todos
});

export const getTodoItems = () => {
    return (dispatch) => {
        fetch("http://localhost:8080/todos")
        .then((response) => response.json())
        .then((data) => dispatch(fetchedTodos(data)));
        //after api call we dispatch data
    };
};

export const login = (userId) => ({
    type: LOGIN,
    payload: userId
});
export const logout = (userId) => ({
    type: LOGOUT,
});