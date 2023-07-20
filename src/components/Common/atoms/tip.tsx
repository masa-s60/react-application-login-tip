import { useState } from "react";
import { useAuthContext } from "../../../Context/auth-context";

const Tip = () => {
  const context = useAuthContext();
  const [userTip, setUserTip] = useState(context?.user?.Tip);

  return(
    <div className="">
      <p style={{fontWeight: 'bold', fontSize: '1.5vw'}}>残高：{userTip}</p>
    </div>
  )
}

export default Tip;