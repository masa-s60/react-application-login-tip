import IconImage from "../Common/Atoms/icon-image";
import Dashboard from "../Templates/dashboard";
import { useEffect } from 'react';
import { authSessionState } from "../../recoil/atom";
import { useRecoilState } from "recoil";
import { useNavigate } from 'react-router-dom';
import { typeUser } from "../../types/type";

const TipApplication = () => {

  const [session, setSession] = useRecoilState<typeUser | undefined>(authSessionState);
  const navigate = useNavigate()

  useEffect( () => {
    if(!session) {
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
      <Dashboard setSession={setSession}/>
    </div>
  )
}

export default TipApplication;