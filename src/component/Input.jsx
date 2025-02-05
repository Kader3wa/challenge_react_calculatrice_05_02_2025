import { useContext } from "react";
import { CalculateContext } from "../context/CalculateContext";

const Input = () => {

    const { state } = useContext(CalculateContext);

    const handleChange = (e) => {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            dispatch({ type: "SET_INPUT", payload: value });
        }
    };

    return <input
        type="text"
        value={state.input}
        onChange={handleChange}
        readOnly
    />;
};

export default Input;