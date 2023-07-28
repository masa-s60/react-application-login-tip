import UserHeader from "../Common/Molecules/user-header";
import UserListTitle from "../Common/atoms/user-list-title";
import UserTable from "../Features/user-table";
import LogOutButton from "../Common/atoms/logout-button";

const Dashboard = () => {
  
  return(
    <div>
      <UserHeader/>
      <UserListTitle/>
      <UserTable/>
      <LogOutButton/>
    </div>
  )
}

export default Dashboard;