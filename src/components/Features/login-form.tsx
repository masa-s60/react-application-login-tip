import { useForm, Controller } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/auth-context";
import Input from '../Common/Atoms/input';
import Button from '../Common/Atoms/button';
import { login } from "../Container/transition-func";

const LogInForm = () => { 
  
  const { register, control, handleSubmit, formState: { errors } } = useForm({criteriaMode: 'all'});
  const navigate = useNavigate();
  const context = useAuthContext();
  const [errorMessage, setErrorMessage] = useState('');

  useEffect( () => {
    if(context?.user) {
      navigate('/tipApp');
    } 
  },[]);

  return(
    <div className="columns mt-4">
      <form onSubmit={handleSubmit(async ({Email, Password}) => {
        const result = await login({Email, Password});
        if(result === false) {
          setErrorMessage('メールアドレスかパスワードが間違っています');
        } else if(result) {
          context?.setUser(result);
          navigate('/tipApp');
        }
      })}>
        {errorMessage && <p className="level-item has-text-danger mb-2">{errorMessage}</p>}
        {errors.Email?.message && <p className="level-item has-text-danger">{errors.Email.message as string}</p>}
        {errors.Password?.message && <p className="level-item has-text-danger">{errors.Password.message as string}</p>}
        <table className="table" style={{backgroundColor: 'rgba(255, 255, 255, 0)'}}>
          <tbody>
            <tr>
              <td>
                <Controller
                  name="Email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => 
                    <Input
                      {...field}
                      type="text"
                      register={register}
                      label="メールアドレス"
                      classValueLabel="input-label"
                      classValueInput="input-style"
                      maxLength={50}
                    />
                  }
                  rules={{ 
                    required: {
                      value: true,
                      message: "Emailを入力してください",
                    },
                    minLength: {
                      value: 8,
                      message: "Emailは8文字以上入力してください",
                    },
                    pattern: {
                      value: /.+@.+\..+/,
                      message: "メールアドレスを入力してください",
                    }
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Controller
                  name="Password"
                  control={control}
                  defaultValue=""
                  render={({ field }) => 
                    <Input 
                      {...field} 
                      type="text"
                      register={register} 
                      label="パスワード"
                      classValueLabel="input-label"
                      classValueInput="input-style"
                      maxLength={50}
                    />
                  }
                  rules={{ 
                    required: {
                      value: true,
                      message: "Passwordを入力してください",
                    },
                    minLength: {
                      value: 8,
                      message: "Passwordは8文字以上入力してください",
                    }
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
        
        <Button
          classValueButtonContainer="level-item"
          classValueButton="mt-5 login-button-style"
          text="Login"
          type="submit"
        />
      </form>
    </div>
  )
}

export default LogInForm;