import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "../Common/atoms/error-message";
import InputTip from "../Common/atoms/input-tip";
import ModalSendButton from "../Common/atoms/modal-send-button";
import { useAuthContext } from "../../Context/auth-context";
import { sendTip } from "../Container/tip-func";
import { getAllUsersDocuments } from "../Container/firestore-connection";
import { typeUser, useStateTypeShow, useStateTypeUserInfo, useStateTypeUsers, typeSetActive } from "../../types/type";

const SendMoneyForm: FC<{userInfoItem: useStateTypeUserInfo, showModalItem: useStateTypeShow, usersItem: useStateTypeUsers, setActive: typeSetActive}> = (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm({criteriaMode: 'all'});
  const context = useAuthContext();
  const [inputMoney, setInputMoney] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const closeModal = (userList: Partial<typeUser>[]) => {
    props.setActive(false);
    setTimeout( () => {
      props.showModalItem.setShowModal(undefined);
    }, 700);
    props.usersItem.setUsers(userList);
  }

  return(
    <div>
      <form onSubmit={handleSubmit( async () => {
        const [sendMyResult, sentTargetResult] = await sendTip(context?.user, props.userInfoItem.userInfo, inputMoney);
        if((sendMyResult === undefined) || (sentTargetResult === undefined)) {
          setErrorMessage('送金はできませんでした');
        } else if(sendMyResult === 'NOTENOUGH') {
          setErrorMessage('残高が足りません');
        } else {
          context?.setUser(sendMyResult as unknown as typeUser);
          const allUserDoc = await getAllUsersDocuments();
          const userList = allUserDoc.filter( (user) => user.Password !== context?.user?.Password);
          closeModal(userList);
        }
      })}>
        <ErrorMessage errorMessage={errorMessage} errors={errors}/>
        <InputTip register={register} setInputMoney={setInputMoney} setErrorMessage={setErrorMessage}/>
        <ModalSendButton buttonValue={'送金'} showModalItem={props.showModalItem}/>
      </form>
    </div>
  )
}

export default SendMoneyForm;