import { FC } from "react";
import { typeSignUpDisplayHandlingItem } from "../../../types/type";
const OtherLink: FC<{link: string, signUpItems: typeSignUpDisplayHandlingItem}> = (props) => {
  const toggleInputArea = () => {
    props.signUpItems.setSignUpDisplayHandling(!props.signUpItems.signUpDisplayHandling);
  }
  
  return(
    <div className="level-item mt-3">
      <a 
        className="is-size-5"
        onClick={() => toggleInputArea()}
      >
        {props.link}
      </a>
    </div>
  )
}

export default OtherLink;