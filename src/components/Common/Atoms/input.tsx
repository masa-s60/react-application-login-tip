import { forwardRef } from "react";
import { inputProps } from "../../../types/type";

const Input = forwardRef<HTMLInputElement, inputProps> ((props, ref) => {
  
  const onChangeEvent = (inputValue: string | undefined) => {
    if(props.onChangeEvent) {
      props.onChangeEvent(inputValue);
    }
  }

  const onFocusEvent = () => {
    if(props.onFocusEvent) {
      props.onFocusEvent(props.onFocusEventArgument);
    }
  }

  return(
    <div className={props.classValueInputContainer} style={props.styleValueInputContainer}>
      <label className={props.classValueLabel} style={props.styleValueLabel}>{props.label}</label>
      <input
        {...props.register(props.name)}
        className={props.classValueInput}
        style={props.styleValueInput}
        name={props.name} 
        type={props.type}
        maxLength={props.maxLength} 
        placeholder={props.name}
        onChange={(e) => onChangeEvent(e.target.value)}
        onFocus={() => onFocusEvent()}
      />
    </div>
  )
});

export default Input;