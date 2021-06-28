import { useReducer } from 'react';

const ACTIONS = {
	inputChange: 'INPUT_CHANGE',
	inputBlur: 'INPUT_BLUR',
	inputReset: 'INPUT_RESET',
};

const initialState = {
	value: '',
	isTouched: false,
};

function reducer(state, action) {
	if (action.type === ACTIONS.inputChange) {
		return {
			value: action.value,
			isTouched: state.isTouched,
		};
	}
	if (action.type === ACTIONS.inputBlur) {
		return {
			value: state.value,
			isTouched: true,
		};
	}
	if (action.type === ACTIONS.inputReset) {
		return {
			value: '',
			isTouched: false,
		};
	}
	return initialState;
}

const useInput = (validateValue) => {
	const [inputState, dispatch] = useReducer(reducer, initialState);

	// const [enteredValue, setEnteredValue] = useState('');
	// const [isTouched, setIsTouched] = useState(false);

	// const valueIsValid = validateValue(enteredValue);
	// const hasError = !valueIsValid && isTouched;
	const valueIsValid = validateValue(inputState.value);
	const hasError = !valueIsValid && inputState.isTouched;

	const valueChangeHandler = (e) => {
		dispatch({ type: ACTIONS.inputChange, value: e.target.value });
		// setEnteredValue(e.target.value);
	};

	const inputBlurHandler = (e) => {
		dispatch({ type: ACTIONS.inputBlur });
		// setIsTouched(true);
	};

	const reset = () => {
		dispatch({ type: ACTIONS.inputReset });
		// setEnteredValue('');
		// setIsTouched(false);
	};

	return {
		value: inputState.value,
		isValid: valueIsValid,
		hasError,
		valueChangeHandler,
		inputBlurHandler,
		reset,
	};
};

export default useInput;
