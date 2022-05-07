export const ADD_TODO_ITEM = "ADD_TODO_ITEM";
export const GET_TODO_ITEMS = "GET_TODO_ITEMS";
export const FETCHED_TODO_ITEMS = "FETCHED_TODO_ITEMS";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const ADD_TO_BAG = "ADD_TO_BAG";
export const REMOVE_TO_BAG ="REMOVE_TO_BAG"
export const SAVED_BAG = "SAVED_BAG";
export const ISOPEN = "ISOPEN";
export const ISCLOSE = "ISCLOSE";

export const isopen = (payload) => ({
  type: ISOPEN,
  payload,
});
export const isclose = (payload) => ({
  type: ISCLOSE,
  payload,
});

export const savedBag = (payload) => ({
  type: SAVED_BAG,
  payload,
});

export const addingToBag = (payload) => ({
  type: ADD_TO_BAG,
  payload,
});
export const removeToBag = (payload) => ({
  type: REMOVE_TO_BAG,
  payload,
});

export const getCartData = (dispatch) => {
  return (dispatch) => {
    fetch("http://localhost:8080/cartProducts")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        dispatch(savedBag(res));
      });
  };
};

export const login = (userId) => ({
  type: LOGIN,
  payload: userId,
});
export const logout = (userId) => ({
  type: LOGOUT,
});

export const addTodoItem = (data) => ({
  type: ADD_TODO_ITEM,
  payload: data,
});

export const fetchedTodos = (todos) => ({
  type: FETCHED_TODO_ITEMS,
  payload: todos,
});

export const getTodoItems = () => {
  return (dispatch) => {
    fetch("http://localhost:8080/todos")
      .then((response) => response.json())
      .then((data) => dispatch(fetchedTodos(data)));
    //after api call we dispatch data
  };
};
