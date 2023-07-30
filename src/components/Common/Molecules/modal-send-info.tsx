import { FC } from "react";
import ModalMyTip from "../atoms/modal-my-tip";

const ModalSendInfo = () => {

  return(
    <div className="modal-window-info-field">
      <ModalMyTip/>
      <b>送る金額</b>
    </div>
  )
}

export default ModalSendInfo;