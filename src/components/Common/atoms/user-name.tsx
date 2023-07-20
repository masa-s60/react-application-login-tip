import { FC } from 'react';
import { useAuthContext } from "../../../Context/auth-context";

const UserName = () => {
  const context = useAuthContext();

  return(
    <div>
      <p style={{fontWeight: 'bold', fontSize: '1.5vw'}}>{context?.user?.UserName}さんようこそ!!</p>
    </div>
  )
}

export default UserName;