import { InputProps } from "../../../types/type";

const InputUserInfo = ({type, register}: InputProps) => {

  return(
    <div className="">
      <input 
        {...register(type, { 
          required: {
            value: true,
            message: `${type}を入力してください`,
          },
          minLength: {
            value: 8,
            message: `${type}は8文字以上入力してください`,
          },
        })} 
        className="is-size-5 input-style"
        name={type} 
        type="text" 
        placeholder={type}
      />
    </div>
  )
}

export default InputUserInfo;