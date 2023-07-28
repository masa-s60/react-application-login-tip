import { FC } from "react";

const ModalTargetName: FC<{targetName: string | undefined}> = (props) => {

  return(
    <div>
      <p className="mb-5">{props.targetName}の残高</p>
    </div>
  )
}

export default ModalTargetName;