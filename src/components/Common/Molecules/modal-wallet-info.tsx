import { FC } from "react";
import ModalTargetName from "../atoms/modal-target-name";
import ModalTargetTip from "../atoms/modal-target-tip";

const ModalWalletInfo: FC<{targetName: string | undefined, tip: string | number | undefined}> = (props) => {

  return(
    <div className="modal-window-info-field">
      <ModalTargetName targetName={props.targetName + 'さん'}/>
      <ModalTargetTip tip={props.tip}/> 
    </div>
  )
}

export default ModalWalletInfo;