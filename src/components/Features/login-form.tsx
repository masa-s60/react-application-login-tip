import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/auth-context";
import InputUserInfo from "../Common/atoms/input-user-Info";
import InputHeader from "../Common/atoms/input-header";
import ErrorMessage from '../Common/atoms/error-message';
import LogInButton from "../Common/atoms/login-button";
import { logIn } from "../Container/transition-func";

const LogInForm = () => { 
  const { register, handleSubmit, formState: { errors } } = useForm({criteriaMode: 'all'});
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
        const result = await logIn({Email, Password});
        if(result === false) {
          setErrorMessage('メールアドレスかパスワードが間違っています');
        } else if(result) {
          context?.setUser(result);
          navigate('/tipApp');
        }
      })}>
        <ErrorMessage errorMessage={errorMessage} errors={errors}/>
        <table className="table" style={{backgroundColor: 'rgba(255, 255, 255, 0)'}}>
          <tbody>
            <tr>
              <td style={{verticalAlign: "middle"}}><InputHeader type="メールアドレス"/></td>
              <td><InputUserInfo type="Email" register={register}/></td>
            </tr>
            <tr>
              <td style={{verticalAlign: "middle"}}><InputHeader type="パスワード"/></td>
              <td><InputUserInfo type="Password" register={register}/></td>
            </tr>
          </tbody>
        </table>
        <LogInButton buttonValue='Login'/>
      </form>
    </div>
  )
}

export default LogInForm;