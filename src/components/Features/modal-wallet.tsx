import Text from "../Common/Atoms/text";
import Button from "../Common/Atoms/button";
import { fadeOutModal } from "../Container/tip-func";
import { FC } from "react";
import { useStateTypeUserInfo, useStateTypeShow, typeSetActive } from "../../types/type";

const ModalWallet: FC<{userInfoItem: useStateTypeUserInfo, showModalItem: useStateTypeShow, setActive: typeSetActive}> = (props) => {

  return(
    <div className="overlay" onClick={() => fadeOutModal(props.showModalItem.setShowModal, props.setActive)}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-window-info-field">
          <Text classValueText="mb-5">
            {props.userInfoItem.userInfo?.UserName}さんの残高
          </Text>
          <Text classValueText="mb-3">
            {props.userInfoItem.userInfo?.Tip}
          </Text>
        </div>
        <Button
          classValueButtonContainer="modal-window-button-field"
          classValueButton="close-button-style"
          text="閉じる"
          type="button"
          onClickEvent={fadeOutModal}
          onClickEventArgument={[props.showModalItem.setShowModal, props.setActive]}
        />
      </div>
    </div>
  )
}

export default ModalWallet;