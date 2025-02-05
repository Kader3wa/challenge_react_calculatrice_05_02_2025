import React, { useContext } from "react";
import { CalculateContext } from "../context/CalculateContext";

const Button = ({ label, actionType }) => {
    const { dispatch } = useContext(CalculateContext);

    const handleClick = () => {
        if (actionType === "NUMBER") {
            dispatch({ type: "NUMBER", payload: label });
        } else if (actionType === "OPERATOR") {
            dispatch({ type: "OPERATOR", payload: label });
        } else if (actionType === "CALCUL") {
            dispatch({ type: "CALCUL" });
        } else if (actionType === "RESET") {
            dispatch({ type: "RESET" });
        }
    };

    return (
        <button onClick={handleClick}>
            {label}
        </button>
    );
};

export default Button;

