import { FC } from "react";
import { inputProps } from "../../../types/type";

const Input: FC<inputProps> = (props) => {

  return(
    <div className={props.classValueInputContainer} style={props.styleValueInputContainer}>
      <label className={props.classValueLabel} style={props.styleValueLabel}>{props.label}</label>
      <input
        className={props.classValueInput}
        style={props.styleValueInput}
        name={props.name}
        value={props.value}
        type={props.type}
        maxLength={props.maxLength} 
        placeholder={props.placeholder}
        onChange={(e) => props.onChangeEvent && props.onChangeEvent(e.target.value)}
        onFocus={() => props.onFocusEvent && props.onFocusEvent()}
      />
    </div>
  )
}

export default Input;