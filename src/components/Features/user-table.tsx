import UserList from "../Common/Molecules/user-list";
import ModalWindow from "./modal-window";
import { useState } from "react";
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
  const modalClassToggleItem = {
    active,
    setActive
  }

  return(
    <div className='level-item mb-6'>
      <table style={{width: '60%'}}>
        <thead>
          <tr>
            <td style={{fontWeight: 'bold', fontSize: '2vw', textAlign: 'center'}}>ユーザ名</td>
          </tr>
        </thead>
        <tbody>
          <UserList 
            userInfoItem={userInfoItem} 
            showModalItem={showModalItem} 
            usersItem={usersItem}
            modalClassToggleItem={modalClassToggleItem}
          />
        </tbody>
      </table>
      {showModal && <ModalWindow 
        userInfoItem={userInfoItem} 
        showModalItem={showModalItem} 
        usersItem={usersItem}
        modalClassToggleItem={modalClassToggleItem}
      />}
    </div>
  );
}

export default UserTable;
