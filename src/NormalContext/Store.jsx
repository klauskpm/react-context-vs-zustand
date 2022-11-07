import React, { createContext, useContext, useReducer } from 'react';

const DispatchContext = createContext({});
const StateContext = createContext({});

function useContextDispatch() {
  return useContext(DispatchContext);
}

function useContextState() {
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

    default:
      return state;
  }
}

const myState = {
  count: 0,
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
