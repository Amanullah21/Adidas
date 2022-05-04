import { FETCHED_TODO_ITEMS, LOGIN, LOGOUT } from "./actions";

const initialState = {
  todos: [],
  userDetails: {
    isLoggedIn: false,
    userEmail: "",
  },
  cart: [],
  wishList: [],
};

export const todoReducer = (store = initialState, action) => {
  switch (action.type) {
    case FETCHED_TODO_ITEMS:
      return {
        ...store,
        todos: action.payload.filter(
          (task) => task.userID === store.userDetails.userEmail
        ),
      };
    case LOGIN:
      return {
        ...store,
        userDetails: {
          isLoggedIn: true,
          userEmail: action.payload,
        },
      };

    case LOGOUT:
      return {
        ...store,
        userDetails: {
          isLoggedIn: false,
          userEmail: "",
        },
      };

    default:
      return store;
  }
};
