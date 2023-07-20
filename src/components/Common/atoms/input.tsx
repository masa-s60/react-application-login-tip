import { InputProps } from "../../../types/type";

const Input = ({type, register}: InputProps) => {

  return(
    <div className="">
      <input 
        {...register(type, { 
          required: {
            value: true,
            message: `${type}:未入力です`,
          },
          minLength: {
            value: 8,
            message: `${type}: 8文字以上入力してください`,
          },
          // pattern: {
          //   value: /^[A-Za-z0-9]+$/,
          //   message: 'アルファベットと数字で入力してください。',
          // },
        })} 
        className="is-size-5 input-style"
        name={type} 
        type="text" 
        placeholder={type}
      />
    </div>
  )
}

export default Input;