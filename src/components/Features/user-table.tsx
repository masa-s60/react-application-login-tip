import UserList from "../Common/Molecules/user-list";
import ModalWindow from "./modal-window";
import { useState } from "react";
import { typeUser, useStateTypeUserInfo } from "../../types/type";

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

  return(
    <div className='level-item mb-6'>
      <table style={{width: '60%'}}>
        <thead>
          <tr>
            <td style={{fontWeight: 'bold', fontSize: '2vw', textAlign: 'center'}}>ユーザ名</td>
          </tr>
        </thead>
        <tbody>
          <UserList userInfoItem={userInfoItem} showModalItem={showModalItem}/>
        </tbody>
      </table>
      {showModal && <ModalWindow userInfoItem={userInfoItem} showModalItem={showModalItem}/>}
    </div>
  );
}

export default UserTable;
