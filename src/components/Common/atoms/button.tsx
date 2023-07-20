import { FC } from 'react';

const Button:FC<{buttonValue: string}> = (props) => {
  return(
    <div className="level-item">
      <button 
        className="is-size-3 mt-5 button-style"
        type="submit" 
      >
        {props.buttonValue}
      </button>
    </div>
  )
}

export default Button;