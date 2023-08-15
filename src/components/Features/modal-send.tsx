import Text from "../Common/Atoms/text";
import { useAuthContext } from "../../Context/auth-context";
import SendMoneyForm from "./send-money-form";
import { fadeOutModal } from "../Container/tip-func";
import { FC } from "react";
import { useStateTypeUserInfo, useStateTypeShow, useStateTypeUsers, typeSetActive } from "../../types/type";

const ModalSend: FC<{userInfoItem: useStateTypeUserInfo, showModalItem: useStateTypeShow, usersItem: useStateTypeUsers, setActive: typeSetActive}> = (props) => {
  
  const context = useAuthContext();

  return(
    <div className="overlay" onClick={() => fadeOutModal(props.showModalItem.setShowModal, props.setActive)}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <Text
          classValueTextContainer="modal-window-info-field"
          classValueText="mb-3"
        >
          あなたの残高：{context?.user?.Tip}
        </Text>
        <Text
          styleValueTextContainer={{paddingBottom: ".5vw"}}
          styleValueText={{fontWeight: "bold"}}
        >
          送る金額
        </Text>
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