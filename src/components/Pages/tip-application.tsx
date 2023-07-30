import HeaderImage from "../Common/atoms/header-image";
import Dashboard from "../Templates/dashboard";
import { useAuthContext } from "../../Context/auth-context";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TipApplication = () => {
  const navigate = useNavigate()
  const context = useAuthContext();

  useEffect( () => {
    if(!context?.user) {
      navigate('/');
    } 
  },[]);

  return(
    <div className='transition-animation' style={{width: '80%'}}>
      <HeaderImage iconValue="fas fa-coins has-text-warning"/>
      <Dashboard/>
    </div>
  )
}

export default TipApplication;