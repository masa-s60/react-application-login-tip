import { FC } from "react";

const ModalTargetTip: FC<{tip: string | number | undefined}> = (props) => {

  return(
    <div>
      <p className="mb-3">{props.tip}</p>
    </div>
  )
}

export default ModalTargetTip;