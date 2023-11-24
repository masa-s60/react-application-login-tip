import { FC } from 'react';
import { buttonProps } from '../../../types/type';

const Button: FC<buttonProps> = (props) => {

  return(
    <div className={props.classValueButtonContainer} style={props.styleValueButtonContainer}>
      <button 
        className={props.classValueButton}
        style={props.styleValueButton}
        type={props.type}
        onClick={() => props.onClickEvent && props.onClickEvent()}
      >
        {props.children}
      </button>
    </div>
  )
}

export default Button;