import Text from "../Atoms/text";
import { useRecoilValue } from "recoil";
import { authSessionState } from "../../../recoil/atom";

const UserHeader = () => {
  const sessionState = useRecoilValue(authSessionState);

  return(
    <div className="mb-6" style={{display: "flex", justifyContent: "space-around"}}>
      <Text styleValueText={{fontWeight: 'bold', fontSize: '1.5vw'}}>
        {sessionState.UserName}さんようこそ!!
      </Text>
      <Text
        styleValueText={{fontWeight: 'bold', fontSize: '1.5vw'}}
      >
        残高：{sessionState.Tip}
      </Text>
    </div>
  )
}

export default UserHeader;