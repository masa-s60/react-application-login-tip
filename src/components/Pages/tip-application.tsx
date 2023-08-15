import IconImage from "../Common/Atoms/icon-image";
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
      <IconImage 
        classValueIconContainer="level-item"
        styleValueIconContainer={{margin: '4vw 0 10vw 0'}}
        classValueIcon="fas fa-coins has-text-warning"
        styleValueIcon={{fontSize: '12vw'}}
      />
      <Dashboard/>
    </div>
  )
}

export default TipApplication;