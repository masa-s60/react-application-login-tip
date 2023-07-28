import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../Context/auth-context";

const LogOutButton = () => {
  const context = useAuthContext();
  const navigate = useNavigate();

  const logout = () => {
    context?.setUser(undefined);
    navigate("/");
  }

  return(
    <div style={{textAlign: 'right'}}>
      <button className="button-style mr-0" onClick={() => logout()}>ログアウト</button>
    </div>
  )
}

export default LogOutButton;