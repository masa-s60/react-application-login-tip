import UserHeader from "../Features/User/user-header";
import UserTable from "../Features/User/user-table";
import Text from "../Common/Atoms/text";
import Button from "../Common/Atoms/button";
import { logout } from "../Container/transition-func";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { SetterOrUpdater } from "recoil";
import { typeUser } from "../../types/type";

const Dashboard: FC<{setSession: SetterOrUpdater<typeUser | undefined>}> = (props) => {

  const navigate = useNavigate();

  return(
    <div>
      <UserHeader/>
      <Text classValueTextContainer="level-item block">
        <p className="has-text-dark" style={{fontSize: '3.5vw'}}>ユーザ一覧</p>
      </Text>
      <UserTable/>
      <Button
        styleValueButtonContainer={{textAlign: 'right'}}
        classValueButton="logout-button-style"
        type="submit"
        onClickEvent={() => logout(props.setSession, navigate) as unknown as () => void}
      >
        <p>Logout</p>
      </Button>
    </div>
  )
}

export default Dashboard;