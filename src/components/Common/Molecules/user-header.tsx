import UserName from "../atoms/user-name";
import Tip from "../atoms/tip";

const UserHeader = () => {
  return(
    <div className="mb-6" style={{display: "flex", justifyContent: "space-around"}}>
      <UserName/>
      <Tip/>
    </div>
  )
}

export default UserHeader;