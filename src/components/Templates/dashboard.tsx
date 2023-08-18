import UserHeader from "../Common/Molecules/user-header";
import UserTable from "../Features/user-table";
import Text from "../Common/Atoms/text";
import Button from "../Common/Atoms/button";
import { logout } from "../Container/transition-func";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { SetterOrUpdater } from "recoil";
import { typeUser } from "../../types/type";

const Dashboard: FC<{setSession: SetterOrUpdater<typeUser>}> = (props) => {

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
        onClickEventArgument={[props.setSession, navigate]}
      />
    </div>
  )
}

export default Dashboard;