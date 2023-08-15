import UserHeader from "../Common/Molecules/user-header";
import UserTable from "../Features/user-table";
import Text from "../Common/Atoms/text";
import Button from "../Common/Atoms/button";
import { logout } from "../Container/transition-func";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/auth-context";

const Dashboard = () => {
  const context = useAuthContext();
  const navigate = useNavigate();

  return(
    <div>
      <UserHeader/>
      <Text
        classValueTextContainer="level-item block"
        classValueText="has-text-dark"
        styleValueText={{fontSize: '3.5vw'}}
      >
        ユーザ一覧
      </Text>
      <UserTable/>
      <Button
        styleValueButtonContainer={{textAlign: 'right'}}
        classValueButton="logout-button-style"
        text="Logout"
        type="submit"
        onClickEvent={logout}
        onClickEventArgument={[context, navigate]}
      />
    </div>
  )
}

export default Dashboard;