import Header from "../Common/Molecules/header";
import FirstForm from "../Templates/first-form";
import Footer from "../Common/Molecules/footer";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { authSessionState } from "../../recoil/atom";
import { useRecoilState } from 'recoil';
import { typeUser } from "../../types/type";

const Login = () => {

  const [session, setSession] = useRecoilState<typeUser | undefined>(authSessionState);
  const navigate = useNavigate();
  
  useEffect( () => {
    if(session) {
      navigate('/tipApp');
    } 
  },[]);

  return(
    <div className='transition-animation'>
      <Header/>
      <FirstForm setSession={setSession}/>
      <Footer/>
    </div>
  )
}

export default Login;