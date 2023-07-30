import { FC } from "react";

const InputHeader: FC<{type: string}> = (props) => {
  return(
    <div>
      <p className="input-header">{props.type}</p>
    </div>
  )
}

export default InputHeader;