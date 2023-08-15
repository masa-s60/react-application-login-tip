import { FC, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "../Common/Atoms/input";
import Button from "../Common/Atoms/button";
import { fadeOutModal } from "../Container/tip-func";
import { useAuthContext } from "../../Context/auth-context";
import { sendTip } from "../Container/tip-func";
import { getAllUsersDocuments } from "../Container/firestore-connection";
import { typeUser, useStateTypeShow, useStateTypeUserInfo, useStateTypeUsers, typeSetActive } from "../../types/type";

const SendMoneyForm: FC<{userInfoItem: useStateTypeUserInfo, showModalItem: useStateTypeShow, usersItem: useStateTypeUsers, setActive: typeSetActive}> = (props) => {
  
  const { register, control, handleSubmit, formState: { errors } } = useForm({criteriaMode: 'all'});
  const context = useAuthContext();
  const [inputMoney, setInputMoney] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  return(
    <div>
      <form onSubmit={handleSubmit( async () => {
        const [sendMyResult, sentTargetResult] = await sendTip(context?.user, props.userInfoItem.userInfo, inputMoney);
        if((sendMyResult === undefined) || (sentTargetResult === undefined)) {
          setErrorMessage('送金はできませんでした');
        } else {
          context?.setUser(sendMyResult as unknown as typeUser);
          const allUserDoc = await getAllUsersDocuments();
          const userList = allUserDoc.filter( (user) => user.Password !== context?.user?.Password);
          fadeOutModal(props.showModalItem.setShowModal ,props.setActive);
          props.usersItem.setUsers(userList);
        }
      })}>
        {errorMessage && <p className="level-item has-text-danger mb-2">{errorMessage}</p>}
        {errors.Tip?.message && <p className="level-item has-text-danger m-4">{errors.Tip?.message as string}</p>}
        <Controller
          name="Tip"
          control={control}
          defaultValue=""
          render={({ field }) => 
            <Input 
              {...field} 
              type="text"
              register={register} 
              classValueInput="is-size-6 input-style mb-5 input-width"
              onChangeEvent={setInputMoney}
              onFocusEvent={setErrorMessage}
              onFocusEventArgument=""
              maxLength={8}
            />
          }
          rules={{ 
            required: {
              value: true,
              message: '送る金額を入力してください',
            },
            maxLength: {
              value: 8,
              message: '入力桁数が多すぎます',
            },
            pattern: {
              value: /^\d+$/,
              message: "正式な数値を入力してください",
            },
            min: {
              value: 1,
              message: "1以上の数値を入力してください",
            },
            max: {
              value: Number(context?.user?.Tip),
              message: "残高が足りません",
            }
          }}
        />
        <Button
          classValueButtonContainer="modal-window-button-field"
          classValueButton="close-button-style"
          text="送金"
          type="submit"
        />
      </form>
    </div>
  )
}

export default SendMoneyForm;