import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Input from "../Common/atoms/input";
import InputType from "../Common/atoms/input-type";
import Button from "../Common/atoms/button";
import { signUp } from "../Container/transition-func";
import { useAuthContext } from "../../Context/auth-context";

const SignUpForm = () => { 
  const { register, handleSubmit, formState: { errors } } = useForm({criteriaMode: 'all'});
  const navigate = useNavigate();
  let context = useAuthContext();
  const [errorMessage, setErrorMessage] = useState('');

  useEffect( () => {
    if(context?.user) {
      navigate('/tipApp');
    } 
  },[]);

  return(
    <div className="columns mt-4">
      <form onSubmit={handleSubmit(async ({UserName, Email, Password}) => {
        const result = await signUp({UserName, Email, Password});
        if(result === false) {
          setErrorMessage('既に登録があります');
        } else if(result) {
          context?.setUser(result);
          navigate('/tipApp');
        }
      })}
      >
        <p className="level-item has-text-danger">{errorMessage}</p>
        {errors.UserName?.message && <div className="level-item has-text-danger">{errors.UserName.message as string}</div>}
        {errors.Email?.message && <div className="level-item has-text-danger">{errors.Email.message as string}</div>}
        {errors.Password?.message && <div className="level-item has-text-danger">{errors.Password.message as string}</div>}
        <table className="table" style={{backgroundColor: 'rgba(255, 255, 255, 0)'}}>
          <tbody>
            <tr>
              <td><InputType type="ユーザ名"/></td>
              <td><Input type="UserName" register={register}/></td>
            </tr>
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
        <Button buttonValue='新規登録'/>
      </form>
    </div>
  )
}

export default SignUpForm;