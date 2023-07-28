import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/auth-context";
import Input from "../Common/atoms/input-user-Info";
import InputType from "../Common/atoms/input-header";
import ErrorMessage from '../Common/atoms/error-message';
import Button from "../Common/atoms/button";
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
              <td><InputType type="メールアドレス"/></td>
              <td><Input type="Email" register={register}/></td>
            </tr>
            <tr>
              <td><InputType type="パスワード"/></td>
              <td><Input type="Password" register={register}/></td>
            </tr>
          </tbody>
        </table>
        <Button buttonValue='Login'/>
      </form>
    </div>
  )
}

export default LogInForm;