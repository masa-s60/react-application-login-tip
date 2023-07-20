import { FC, useState } from "react";
import SendMoneyForm from "../Common/Molecules/send-money-form";
import { useAuthContext } from "../../Context/auth-context";
import { useStateTypeUserInfo, useStateTypeShow } from "../../types/type";

const ModalWindow: FC<{userInfoItem: useStateTypeUserInfo, showModalItem: useStateTypeShow}> = (props) => {
  const context = useAuthContext();

  return( 
    <div className="overlay" onClick={() => props.showModalItem.setShowModal(undefined)}>
      <div className="modal-window" style={{textAlign: 'center'}} onClick={(e) => e.stopPropagation()}>
        <div className="modal-window-info-field">
          {(() => {
            if(props.showModalItem.showModal === 'WALLET') {
              return(
                <>
                  <p className="mb-5">{props.userInfoItem.userInfo?.UserName + 'さん'}の残高</p>
                  <p className="mb-3">{props.userInfoItem.userInfo?.Tip}</p>
                </>
              )
            } else {
              return(
                <>
                  <p className="mb-5">あなたの残高 : {context?.user?.Tip}</p>
                  <b className="mb-2">送る金額</b>
                  <SendMoneyForm userInfoItem={props.userInfoItem} showModalItem={props.showModalItem}/>
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