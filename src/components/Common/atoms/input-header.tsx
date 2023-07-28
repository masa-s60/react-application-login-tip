import { FC } from "react";

const InputHeader: FC<{type: string}> = (props) => {
  return(
    <div className="mr-3">
      <p className="is-size-5">{props.type}</p>
    </div>
  )
}

export default InputHeader;