import { FC } from "react";
import ModalWallet from "../Features/Modal/modal-wallet";
import ModalSend from "../Features/Modal/modal-send";
import { useStateTypeUserInfo, useStateTypeShow, useStateTypeUsers, typeSetActive } from "../../types/type";

const ModalWindow: FC<{userInfoItem: useStateTypeUserInfo, showModalItem: useStateTypeShow, usersItem: useStateTypeUsers, setActive: typeSetActive}> = (props) => {

  return(
    <div>
      {(() => {
        if(props.showModalItem.showModal === 'WALLET') {
          return(
            <>
              <ModalWallet
                userInfoItem={props.userInfoItem} 
                showModalItem={props.showModalItem}
                setActive={props.setActive}
              />
            </>
          )
        } else if(props.showModalItem.showModal === 'SEND') {
          return(
            <>
              <ModalSend
                userInfoItem={props.userInfoItem} 
                showModalItem={props.showModalItem}
                usersItem={props.usersItem}
                setActive={props.setActive}
              />
            </>
          )
        }
      })()}
    </div>
  )
}

export default ModalWindow;