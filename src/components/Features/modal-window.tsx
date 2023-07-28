import { FC, useState } from "react";
import ModalWalletInfo from "../Common/Molecules/modal-wallet-info";
import ModalWalletButton from "../Common/atoms/modal-wallet-button";
import ModalSendInfo from "../Common/Molecules/modal-send-info";
import SendMoneyForm from "../Common/Molecules/send-money-form";
import { useAuthContext } from "../../Context/auth-context";
// import { CSSTransition } from "../../../node_modules/react-transition-group";
import { useStateTypeUserInfo, useStateTypeShow, useStateTypeUsers, useStateTypeActive } from "../../types/type";

const ModalWindow: FC<{userInfoItem: useStateTypeUserInfo, showModalItem: useStateTypeShow, usersItem: useStateTypeUsers, modalClassToggleItem: useStateTypeActive}> = (props) => {
  const context = useAuthContext();

  return( 
    <div className="overlay" onClick={() => props.showModalItem.setShowModal(undefined)}>
      <div 
        className={`modal-window ${props.modalClassToggleItem.active ? "slide-in" : "slide-in slide-out"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {(() => {
            if(props.showModalItem.showModal === 'WALLET') {
              return(
                <>
                  <ModalWalletInfo 
                    targetName={props.userInfoItem.userInfo?.UserName} 
                    tip={props.userInfoItem.userInfo?.Tip}
                  />
                  <ModalWalletButton setShowModal={props.showModalItem.setShowModal}/>
                </>
              )
            } else {
              return(
                <>
                  <ModalSendInfo myTip={context?.user?.Tip}/>
                  <SendMoneyForm 
                    userInfoItem={props.userInfoItem} 
                    showModalItem={props.showModalItem} 
                    usersItem={props.usersItem}
                  />
                </>
              )
            }
          })()}
        </div>
      </div>
    </div>
  )
}

export default ModalWindow;