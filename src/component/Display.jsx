import { useContext } from "react";
import { CalculateContext } from "../context/CalculateContext";

const Display = () => {

    const { state } = useContext(CalculateContext);

    return (
        <p>{state.number || 0}</p>
    );
}

export default Display;