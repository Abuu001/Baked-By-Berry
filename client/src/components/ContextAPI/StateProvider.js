import React,{createContext,useContext,useReducer} from 'react'

//Prepares data layer
export const StateContext =createContext();

export const StateProvider=({reducer,initialState,children}) =>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

//pull info
export const useStateValue =() => useContext(StateContext)
