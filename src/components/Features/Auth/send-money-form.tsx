import { FC, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "../../Common/Molecules/input";
import Button from "../../Common/Atoms/button";
import { fadeOutModal } from "../../Container/tip-func";
import { sendTip } from "../../Container/tip-func";
import { getAllUsersDocuments } from "../../Container/firestore-connection";
import { useRecoilState } from "recoil";
import { authSessionState } from "../../../recoil/atom";
import { typeUser, useStateTypeShow, useStateTypeUserInfo, useStateTypeUsers, typeSetActive } from "../../../types/type";

const SendMoneyForm: FC<{userInfoItem: useStateTypeUserInfo, showModalItem: useStateTypeShow, usersItem: useStateTypeUsers, setActive: typeSetActive}> = (props) => {

  const [session, setSession] = useRecoilState<typeUser>(authSessionState);
  const { control, handleSubmit, formState: { errors } } = useForm({criteriaMode: 'all'});
  const [errorMessage, setErrorMessage] = useState<string>('');

  return(
    <div>
      <form onSubmit={handleSubmit( async ({Tip}) => {
        const [sendMyResult, sentTargetResult] = await sendTip(session, props.userInfoItem.userInfo, Tip);
        if((sendMyResult === undefined) || (sentTargetResult === undefined)) {
          setErrorMessage('送金はできませんでした');
        } else {
          setSession(sendMyResult as unknown as typeUser);
          const allUserDoc = await getAllUsersDocuments();
          const userList = allUserDoc.filter( (user) => user.Password !== session.Password);
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
          render={({ field: {name, value, onChange} }) => 
            <Input
              name={name}
              type="text"
              value={value}
              onChangeEvent={onChange}
              classValueInput="is-size-6 input-style mb-5 input-width"
              onFocusEvent={() => setErrorMessage('')}
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
              value: Number(session.Tip),
              message: "残高が足りません",
            }
          }}
        />
        <Button
          classValueButtonContainer="modal-window-button-field"
          classValueButton="close-button-style"
          type="submit"
        >
          <span>送金</span>
        </Button>
      </form>
    </div>
  )
}

export default SendMoneyForm;