export const initialState = {
    input: "",
    previousInput: "",
    operator: null,
};

const calculateReducer = (state, action) => {
    switch (action.type) {
        case "NUMBER":
            return {
                ...state,
                input: state.input + action.payload,
            };

        case "OPERATOR":
            return {
                previousInput: state.input,
                input: "",
                operator: action.payload,
            };

        case "CALCUL":
            if (!state.previousInput || !state.input || !state.operator) return state;

            const prev = parseFloat(state.previousInput);
            const current = parseFloat(state.input);
            let result = 0;

            switch (state.operator) {
                case "+":
                    result = prev + current;
                    break;
                case "-":
                    result = prev - current;
                    break;
                case "*":
                    result = prev * current;
                    break;
                default:
                    return state;
            }

            return {
                input: result.toString(),
                previousInput: "",
                operator: null,
            };

        case "RESET":
            return initialState;

        default:
            return state;
    }
};

export default calculateReducer;
