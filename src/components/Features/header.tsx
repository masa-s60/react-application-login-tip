import Title from "../Common/atoms/title";
import HeaderImage from "../Common/atoms/header-image";
const Header = () => {
  return(
    <div className="">
      <HeaderImage iconValue="fas fa-user-circle has-text-info"/>
      <Title/>
    </div>
  )
}

export default Header;