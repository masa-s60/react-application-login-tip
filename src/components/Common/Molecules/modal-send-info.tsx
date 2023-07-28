import { FC } from "react";
import ModalMyTip from "../atoms/modal-my-tip";
import ModalTargetTip from "../atoms/modal-target-tip";

const ModalSendInfo: FC<{myTip: string | number | undefined}> = (props) => {

  return(
    <div className="modal-window-info-field">
      <ModalMyTip tip={props.myTip}/>
      <b>送る金額</b>
    </div>
  )
}

export default ModalSendInfo;