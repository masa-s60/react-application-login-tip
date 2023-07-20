import { FC, useState } from "react";
import { useForm } from 'react-hook-form';
import ModalFieldButton from "../atoms/modal-field-button";
import { useAuthContext } from "../../../Context/auth-context";
import { sendTip } from "../../Container/firestore-connection";
import { useStateTypeShow, useStateTypeUserInfo } from "../../../types/type";

const SendMoneyForm: FC<{userInfoItem: useStateTypeUserInfo, showModalItem: useStateTypeShow}> = (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm({criteriaMode: 'all'});
  const context = useAuthContext();
  const [inputMoney, setInputMoney] = useState<string>('');

  return(
    <div className="">
      <form onSubmit={handleSubmit(async () => {
        sendTip(context?.user, props.userInfoItem.userInfo, inputMoney);
      })}>
        <input
          className="is-size-6 input-style mb-5" 
          style={{width: '80%'}}
          type="text" 
          onChange={(e) => setInputMoney(e.target.value as string)}
        />
        <ModalFieldButton buttonValue={props.showModalItem.showModal === 'WALLET' ? '閉じる' : '送金'} showModalItem={props.showModalItem}/>
      </form>
    </div>
  )
}

export default SendMoneyForm;