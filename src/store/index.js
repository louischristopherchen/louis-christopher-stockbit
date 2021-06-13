import React, { createContext, useReducer } from 'react';

const initialState = {
  movieList: {
    list: [],
    total: 0
  }
};

export const store = createContext(initialState);
const { Provider } = store;

export const ACTIONS = {
  setMovieList: 'SET_MOVIE_LIST',
};

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((iState, action) => {
    switch (action.type) {
      case ACTIONS.setMovieList:
        return {
          ...iState,
          movieList: action.payload,
        };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
