import { getAllUsersDocuments } from "../../Container/firestore-connection";
import { useEffect, useState, FC } from "react";
import { typeUser, useStateTypeShow, useStateTypeUserInfo } from "../../../types/type";

const UserList: FC<{userInfoItem: useStateTypeUserInfo, showModalItem: useStateTypeShow}> = (props) => {
  const [users, setUsers] = useState<Partial<typeUser>[]>([]);

  useEffect( () => {
    getAllUsersDocuments().then((result) => {
      if(result !== undefined) {
        result.forEach((user) => {
          setUsers((arrayUsers) => [...arrayUsers, user]);
        });
      }
    })
  },[]);

  // ------------------------------------------------------------------------

  const setModalDisplay = (user: any, modalHandle: string) => {
    props.showModalItem.setShowModal(modalHandle as any);
    props.userInfoItem.setUserInfo(user);
  }

  // -------------------------------------------------------------------------

 return(
    <>
      {users.map( (user, index) => {
        return (
          <tr key={index}>
            <td style={{textAlign: 'center', fontSize: '1.5vw', verticalAlign: 'middle'}}>{user.UserName}</td>
            <td style={{textAlign: 'right', padding: '2px'}}>
              <button className="button has-background-primary has-text-white mr-1"
                key={index}
                onClick={() => setModalDisplay(user, 'WALLET')}
              >walletを見る
              </button>
              <button className="button has-background-primary has-text-white" 
                onClick={() => setModalDisplay(user, 'SEND')}>送る
              </button>
            </td>
          </tr>
        )
      })}
    </>
  )
}

export default UserList;