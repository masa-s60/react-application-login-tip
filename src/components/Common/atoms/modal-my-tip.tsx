import { FC } from "react";

const ModalMyTip: FC<{tip: string | number | undefined}> = (props) => {

  return(
    <div>
      <p className="mb-3">あなたの残高：{props.tip}</p>
    </div>
  )
}

export default ModalMyTip;