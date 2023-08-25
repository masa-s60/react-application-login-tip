import Text from "../Common/Atoms/text";
import SendMoneyForm from "../Organisms/send-money-form";
import { fadeOutModal } from "../Container/tip-func";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import { authSessionState } from "../../recoil/atom";
import { useStateTypeUserInfo, useStateTypeShow, useStateTypeUsers, typeSetActive } from "../../types/type";

const ModalSend: FC<{userInfoItem: useStateTypeUserInfo, showModalItem: useStateTypeShow, usersItem: useStateTypeUsers, setActive: typeSetActive}> = (props) => {

  const sessionState = useRecoilValue(authSessionState);

  return(
    <div className="overlay" onClick={() => fadeOutModal(props.showModalItem.setShowModal, props.setActive)}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <Text classValueTextContainer="modal-window-info-field">
          <p className="mb-3">
            あなたの残高：{sessionState.Tip}
          </p>
        </Text>
        <Text styleValueTextContainer={{paddingBottom: ".5vw"}}>
          <p style={{fontWeight: "bold"}}>
            送る金額
          </p>
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