import { useReducer, useState } from "react"


const useIsvalid = (validationLogic) => {
    const intialInputState = {
        enteredValue:'',
        touched:false,
    }

    const reducer = (state, action) => {
        switch(action.type) {
            case 'INPUT':
                return {enteredValue: action.enteredValue, touched:state.touched}
            case 'BLUR':
                return {enteredValue: state.enteredValue, touched:true} 
            case 'RESET':
                return {enteredValue:'', touched:'false'}
            default:
                return reducer;
        }
    }

    const [inputState, dispatch] = useReducer(reducer , intialInputState)

    const valueIsValid = validationLogic(inputState.enteredValue);
    const hasError = !valueIsValid && inputState.touched;

    // const dummy = input => input.trim() !== "";
    // console.log(dummy(enteredValue));
    const valueChangeHandler = event => {
        dispatch({type:'INPUT', enteredValue:event.target.value});
    };
    const valueBlurHandler = event => {
        dispatch({type:'BLUR'})
    };
    const reset = () => {
        dispatch({type:'RESET'})
    }

    return {
        value:inputState.enteredValue,
        valueIsValid,
        hasError,
        valueChangeHandler,
        valueBlurHandler,
        reset,
    }
}


export default useIsvalid;