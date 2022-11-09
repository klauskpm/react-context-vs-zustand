import React, { createContext, useContext, useReducer } from 'react';

const DispatchContext = createContext({});
const StateContext = createContext({});

export function useContextDispatch() {
  return useContext(DispatchContext);
}

export function useContextState() {
  return useContext(StateContext);
}

export function useMyContext() {
  return [useContextState(), useContextDispatch()];
}

export function increaseCount() {
  return { type: 'ADD_TO_COUNT', payload: 1 };
}

export function decreaseCount() {
  return { type: 'ADD_TO_COUNT', payload: -1 };
}

export function login() {
  return { type: 'SET_USER', payload: 'klaus' };
}

export function logout() {
  return { type: 'SET_USER', payload: '' };
}

export function searchTitle(title) {
  return { type: 'SET_SEARCH_TITLE', payload: title };
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_COUNT':
      return {
        ...state,
        count: state.count + action.payload,
      };

    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      };

    case 'SET_SEARCH_TITLE':
      return {
        ...state,
        filters: {
          ...state.filters,
          title: action.payload
        }
      };

    default:
      return state;
  }
}

const myState = {
  count: 0,
  user: '',
  filters: {
    unchanged: 'unchanged value',
    title: ''
  }
};

export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, myState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}
