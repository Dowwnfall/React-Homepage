import { useState } from "react"


const useIsvalid = (validationLogic) => {
    const [enteredInput, setEnteredInput] = useState('');
    const [touched, setTouched] = useState(false);

    const valueIsValid = validationLogic;
    const hasError = !valueIsValid && touched;
    console.log(hasError);

    const valueBlurHandler = event => {
        setTouched(true);
    };
    const valueChangeHandler = event => {
        setEnteredInput(event.target.value);
    };
    const reset = () => {
        setEnteredInput('');
        setTouched(false)
    }

    return {
        value:enteredInput,
        valueIsValid,
        hasError,
        valueChangeHandler,
        valueBlurHandler,
        reset,
    }
}


export default useIsvalid;