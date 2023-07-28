import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "../atoms/error-message";
import InputTip from "../atoms/input-tip";
import ModalSendButton from "../atoms/modal-send-button";
import { useAuthContext } from "../../../Context/auth-context";
import { sendTip } from "../../Container/tip-func";
import { getAllUsersDocuments } from "../../Container/firestore-connection";
import { typeUser, useStateTypeShow, useStateTypeUserInfo, useStateTypeUsers } from "../../../types/type";

const SendMoneyForm: FC<{userInfoItem: useStateTypeUserInfo, showModalItem: useStateTypeShow, usersItem: useStateTypeUsers}> = (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm({criteriaMode: 'all'});
  const context = useAuthContext();
  const [inputMoney, setInputMoney] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

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
          const usersList = await getAllUsersDocuments();
          props.usersItem.setUsers(usersList);
          props.showModalItem.setShowModal(undefined);
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