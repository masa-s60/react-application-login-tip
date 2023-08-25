import UserList from "../Organisms/user-list";
import ModalWindow from "../Templates/modal-window";
import { useState } from "react";
import fade from "../../styles/modal-fade.module.css";
import { CSSTransition } from "react-transition-group";
import { typeUser } from "../../types/type";

const UserTable = () => {
  
  const [showModal, setShowModal] = useState<'WALLET' | 'SEND' | undefined>(undefined);
  const showModalItem = {
    showModal,
    setShowModal
  }

  const [userInfo, setUserInfo] = useState<typeUser | undefined>(undefined);
  const userInfoItem = {
    userInfo,
    setUserInfo
  }

  const [users, setUsers] = useState<Partial<typeUser>[]>([]);
  const usersItem = {
    users,
    setUsers
  }

  const [active, setActive] = useState<boolean>(false);

  return(
    <div className="level-item mb-6">
      <table style={{width: '70%'}}>
        <thead>
          <tr>
            <td className="user-list-header" style={{textAlign: "center"}}>ユーザ名</td>
          </tr>
        </thead>
        <tbody>
          <UserList 
            userInfoItem={userInfoItem} 
            showModalItem={showModalItem} 
            usersItem={usersItem}
            setActive={setActive}
          />
        </tbody>
      </table>
      <CSSTransition 
        in={active} 
        timeout={700} 
        classNames={{
          enter: fade.enter,
          enterActive: fade.enterActive,
          enterDone: fade.enterDone,
          exit: fade.exit,
          exitActive: fade.exitActive,
          exitDone: fade.exitDone
        }}
        unmountOnExit
      >
        <ModalWindow 
          userInfoItem={userInfoItem} 
          showModalItem={showModalItem} 
          usersItem={usersItem}
          setActive={setActive}
        />
      </CSSTransition>
    </div>
  );
}

export default UserTable;
