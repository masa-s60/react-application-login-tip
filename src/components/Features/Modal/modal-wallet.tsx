import Text from "../../Common/Atoms/text";
import Button from "../../Common/Atoms/button";
import { fadeOutModal } from "../../Container/tip-func";
import { FC } from "react";
import { useStateTypeUserInfo, useStateTypeShow, typeSetActive } from "../../../types/type";

const ModalWallet: FC<{userInfoItem: useStateTypeUserInfo, showModalItem: useStateTypeShow, setActive: typeSetActive}> = (props) => {

  return(
    <div className="overlay" onClick={() => fadeOutModal(props.showModalItem.setShowModal, props.setActive)}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-window-info-field">
          <Text>
            <p className="mb-5">{props.userInfoItem.userInfo?.UserName}さんの残高</p>
          </Text>
          <Text>
            <p className="mb-3">{props.userInfoItem.userInfo?.Tip}</p>
          </Text>
        </div>
        <Button
          classValueButtonContainer="modal-window-button-field"
          classValueButton="close-button-style"
          type="button"
          onClickEvent={() => fadeOutModal(props.showModalItem.setShowModal, props.setActive) as unknown as () => void}
        >
          <span>閉じる</span>
        </Button>
      </div>
    </div>
  )
}

export default ModalWallet;