import { FC } from "react";

const InputType: FC<{type: string}> = (props) => {
  return(
    <div className="mr-3">
      <p className="is-size-5">{props.type}</p>
    </div>
  )
}

export default InputType;