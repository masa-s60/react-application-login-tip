import { FC } from 'react';

const LogInButton:FC<{buttonValue: string}> = (props) => {

  return(
    <div className="level-item">
      <button 
        className="mt-5 login-button-style"
        type="submit" 
      >
        {props.buttonValue}
      </button>
    </div>
  )
}

export default LogInButton;