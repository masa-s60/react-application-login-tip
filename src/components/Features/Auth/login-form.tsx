import { useForm, Controller } from 'react-hook-form';
import { useState, FC } from 'react';
import { useNavigate } from "react-router-dom";
import Input from '../../Common/Molecules/input';
import Button from '../../Common/Atoms/button';
import { login } from "../../Container/transition-func";
import { typeUser } from "../../../types/type";
import { SetterOrUpdater } from "recoil";

const LogInForm: FC<{setSession: SetterOrUpdater<typeUser | undefined>}> = (props) => { 

  const { control, handleSubmit, formState: { errors } } = useForm({criteriaMode: 'all'});
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  return(
    <div className="columns mt-4">
      <form onSubmit={handleSubmit(async ({Email, Password}) => {
        const result = await login({Email, Password});
        if(result === false) {
          setErrorMessage('メールアドレスかパスワードが間違っています');
        } else if(result) {
          props.setSession(result);
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
                  render={({ field: {name, value, onChange } }) => 
                    <Input
                      name={name}
                      type="text"
                      value={value}
                      onChangeEvent={onChange}
                      label="メールアドレス"
                      classValueLabel="input-label"
                      classValueInput="input-style"
                      maxLength={50}
                      placeholder='Email'
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
                  render={({ field: {name, value, onChange } }) => 
                    <Input 
                      name={name}
                      type="text"
                      value={value}
                      onChangeEvent={onChange}
                      label="パスワード"
                      classValueLabel="input-label"
                      classValueInput="input-style"
                      maxLength={50}
                      placeholder='Password'
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
          type="submit"
        >
          <p>Login</p>
        </Button>
      </form>
    </div>
  )
}

export default LogInForm;