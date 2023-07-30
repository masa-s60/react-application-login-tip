import ModalWalletInfo from "../Common/Molecules/modal-wallet-info";
import ModalWalletButton from "../Common/atoms/modal-wallet-button";
import { FC } from "react";
import { useStateTypeUserInfo, useStateTypeShow, typeSetActive } from "../../types/type";

const ModalWallet: FC<{userInfoItem: useStateTypeUserInfo, showModalItem: useStateTypeShow, setActive: typeSetActive}> = (props) => {

  const closeModal = () => {
    props.setActive(false);
    setTimeout( () => {
      props.showModalItem.setShowModal(undefined);
    }, 700);
  }

  return(
    <div className="overlay" onClick={() => closeModal()}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <ModalWalletInfo 
          targetName={props.userInfoItem.userInfo?.UserName} 
          tip={props.userInfoItem.userInfo?.Tip}
        />
        <ModalWalletButton
          setShowModal={props.showModalItem.setShowModal}
          setActive={props.setActive}/>
      </div>
    </div>
  )
}

export default ModalWallet;