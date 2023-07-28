import { modalInputItem } from "../../../types/type";

const InputTip = ({register, setInputMoney, setErrorMessage}: modalInputItem) => {

  return(
    <div>
      <input
      {...register('text', { 
        required: {
          value: true,
          message: '送る金額を入力してください',
        },
        maxLength: {
          value: 8,
          message: '入力桁数が多すぎます',
        }
      })}
        className="is-size-6 input-style mb-5" 
        style={{width: '80%'}}
        maxLength={8}
        onChange={(e) => setInputMoney(e.target.value as string)}
        onFocus={() => setErrorMessage('')}
      />
    </div>
  )
}

export default InputTip;