import { getAllUsersDocuments } from "../Container/firestore-connection";
import { useEffect, FC } from "react";
import { useRecoilValue } from "recoil";
import { authSessionState } from "../../recoil/atom";
import { useStateTypeShow, useStateTypeUserInfo, useStateTypeUsers, typeSetActive, typeUser } from "../../types/type";

const UserList: FC<{userInfoItem: useStateTypeUserInfo, showModalItem: useStateTypeShow, usersItem: useStateTypeUsers, setActive: typeSetActive}> = (props) => {

  const sessionState = useRecoilValue(authSessionState);

  useEffect( () => {
    getAllUsersDocuments().then((result) => {
      if(result !== undefined) {
        const userList = result.filter( (user) => user.Password !== sessionState.Password);
        props.usersItem.setUsers(userList);
      } else {
        props.usersItem.setUsers([]);
      }
    });
  },[]);

  const setModalDisplay = (user: typeUser, modalHandle: 'WALLET' | 'SEND') => {
    props.showModalItem.setShowModal(modalHandle);
    props.userInfoItem.setUserInfo(user);
    props.setActive(true);
  }

  return(
    <>
      {props.usersItem.users.map( (user, index) => {
        return (
          <tr key={index}>
            <td style={{textAlign: 'center', fontSize: '1.5vw', verticalAlign: 'middle'}}>{user.UserName}</td>
            <td style={{textAlign: 'right', padding: '2px'}}>
              <button
                key={index}
                className="button has-background-primary has-text-white mr-1"
                onClick={() => setModalDisplay(user as typeUser, 'WALLET')}>walletを見る
              </button>
              <button 
                className="button has-background-primary has-text-white" 
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