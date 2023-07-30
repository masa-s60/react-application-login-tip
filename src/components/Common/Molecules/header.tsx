import Title from "../atoms/title";
import HeaderImage from "../atoms/header-image";

const Header = () => {

  return(
    <div>
      <HeaderImage iconValue="fas fa-user-circle has-text-info"/>
      <Title/>
    </div>
  )
}

export default Header;