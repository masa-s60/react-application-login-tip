import Text from "../Atoms/text";
import { useAuthContext } from "../../../Context/auth-context";

const UserHeader = () => {
  const context = useAuthContext();

  return(
    <div className="mb-6" style={{display: "flex", justifyContent: "space-around"}}>
      <Text styleValueText={{fontWeight: 'bold', fontSize: '1.5vw'}}>
        {context?.user?.UserName}さんようこそ!!
      </Text>
      <Text
        styleValueText={{fontWeight: 'bold', fontSize: '1.5vw'}}
      >
        残高：{context?.user?.Tip}
      </Text>
    </div>
  )
}

export default UserHeader;