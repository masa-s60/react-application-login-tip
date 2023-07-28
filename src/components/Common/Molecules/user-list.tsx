import { getAllUsersDocuments } from "../../Container/firestore-connection";
import { useEffect, FC } from "react";
import { useStateTypeShow, useStateTypeUserInfo, useStateTypeUsers, useStateTypeActive, typeUser } from "../../../types/type";
import { useAuthContext } from "../../../Context/auth-context";

const UserList: FC<{userInfoItem: useStateTypeUserInfo, showModalItem: useStateTypeShow, usersItem: useStateTypeUsers, modalClassToggleItem: useStateTypeActive}> = (props) => {
  const context = useAuthContext();

  useEffect( () => {
    getAllUsersDocuments().then((result) => {
      if(result !== undefined) {
        const userList = result.filter( (user) => user.Password !== context?.user?.Password);
        props.usersItem.setUsers(userList);
      } else {
        props.usersItem.setUsers([]);
      }
    });
  },[]);

  const setModalDisplay = (user: typeUser, modalHandle: 'WALLET' | 'SEND') => {
    props.showModalItem.setShowModal(modalHandle);
    props.userInfoItem.setUserInfo(user);
    props.modalClassToggleItem.setActive(true);
  }

  return(
    <>
      {props.usersItem.users.map( (user, index) => {
        return (
          <tr key={index}>
            <td style={{textAlign: 'center', fontSize: '1.5vw', verticalAlign: 'middle'}}>{user.UserName}</td>
            <td style={{textAlign: 'right', padding: '2px'}}>
              <button className="button has-background-primary has-text-white mr-1"
                key={index}
                onClick={() => setModalDisplay(user as typeUser, 'WALLET')}
              >walletを見る
              </button>
              <button className="button has-background-primary has-text-white" 
                onClick={() => setModalDisplay(user as typeUser, 'SEND')}>送る
              </button>
            </td>
          </tr>
        )
      })}
    </>
  )
}

export default UserList;