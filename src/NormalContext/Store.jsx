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
  return { type: 'INCREASE', payload: 1 };
}

export function decreaseCount() {
  return { type: 'DECREASE', payload: 1 };
}

export function login() {
  return { type: 'LOGIN', payload: 'klaus' };
}

export function logout() {
  return { type: 'LOGOUT', payload: '' };
}

function reducer(state, action) {
  switch (action.type) {
    case 'INCREASE':
      return {
        ...state,
        count: state.count + action.payload,
      };

    case 'DECREASE':
      return {
        ...state,
        count: state.count - action.payload,
      };

    case 'LOGIN':
      return {
        ...state,
        user: action.payload
      };

    case 'LOGOUT':
      return {
        ...state,
        user: action.payload
      };

    default:
      return state;
  }
}

const myState = {
  count: 0,
  user: ''
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
