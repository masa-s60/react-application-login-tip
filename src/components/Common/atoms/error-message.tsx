import { FC } from "react";

const ErrorMessage:FC<{errorMessage: string, errors: any}> = (props) => {
  return(
    <div>
      {props.errorMessage && <p className="level-item has-text-danger mb-2">{props.errorMessage}</p>}
      {props.errors.text?.message && <p className="level-item has-text-danger m-4">{props.errors.text?.message as string}</p>}
      {props.errors.UserName?.message && <p className="level-item has-text-danger">{props.errors.UserName.message as string}</p>}
      {props.errors.Email?.message && <p className="level-item has-text-danger">{props.errors.Email.message as string}</p>}
      {props.errors.Password?.message && <p className="level-item has-text-danger">{props.errors.Password.message as string}</p>}
    </div>
  )
}

export default ErrorMessage;