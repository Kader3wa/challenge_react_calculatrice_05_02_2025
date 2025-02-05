import React, { createContext, useReducer } from "react";
import calculateReducer, { initialState } from "../reducer/calculateReducer";

export const CalculateContext = createContext();

export const CalculatorProvider = ({ children }) => {
    const [state, dispatch] = useReducer(calculateReducer, initialState);

    return (
        <CalculateContext.Provider value={{ state, dispatch }}>
            {children}
        </CalculateContext.Provider>
    );
};
