import { FC } from 'react';
import { buttonProps } from '../../../types/type';

const Button: FC<buttonProps> = (props) => {
  
  const onClickEvent = () => {
    if(props.onClickEvent) {
      props.onClickEvent(props.onClickEventArgument[0], props.onClickEventArgument[1]);
    }
  }

  return(
    <div className={props.classValueButtonContainer} style={props.styleValueButtonContainer}>
      <button 
        className={props.classValueButton}
        style={props.styleValueButton}
        type={props.type}
        onClick={() => onClickEvent()}
      >
        {props.text}
      </button>
    </div>
  )
}

export default Button;