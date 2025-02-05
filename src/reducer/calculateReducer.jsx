export const initialState = {
    number: "",
    prevNumber: "",
    operator: null,
};

const calculateReducer = (state, action) => {
    switch (action.type) {
        case "NUMBER":
            return {
                ...state,
                number: state.number + action.payload,
            };

        case "OPERATOR":
            return {
                prevNumber: state.number,
                number: "",
                operator: action.payload,
            };

        case "CALCUL":
            if (!state.prevNumber || !state.number || !state.operator) return state;

            const prev = parseFloat(state.prevNumber);
            const current = parseFloat(state.number);
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
                number: result.toString(),
                prevNumber: "",
                operator: null,
            };

        case "RESET":
            return initialState;

        default:
            return state;
    }
};

export default calculateReducer;
