import ModalSendInfo from "../Common/Molecules/modal-send-info";
import SendMoneyForm from "./send-money-form";
import { FC } from "react";
import { useStateTypeUserInfo, useStateTypeShow, useStateTypeUsers, typeSetActive } from "../../types/type";

const ModalSend: FC<{userInfoItem: useStateTypeUserInfo, showModalItem: useStateTypeShow, usersItem: useStateTypeUsers, setActive: typeSetActive}> = (props) => {

  const closeModal = () => {
    props.setActive(false);
    setTimeout( () => {
      props.showModalItem.setShowModal(undefined);
    }, 700);
  }

  return(
    <div className="overlay" onClick={() => closeModal()}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <ModalSendInfo/>
        <SendMoneyForm 
          userInfoItem={props.userInfoItem} 
          showModalItem={props.showModalItem} 
          usersItem={props.usersItem}
          setActive={props.setActive}
        />
      </div>
    </div>
  )
}

export default ModalSend;