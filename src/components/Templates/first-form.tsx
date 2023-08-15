import { useState } from "react";
import LogInForm from "../Features/login-form";
import SignUpForm from "../Features/sign-up-from";
import Link from "../Common/Atoms/link";
import { toggleForm } from "../Container/transition-func";
import { typeFormDisplayHandlingItem } from "../../types/type";

const FirstForm = () => {
  const [ formDisplayHandling, setFormDisplayHandling] = useState<boolean>(false);

  const handlingItem: typeFormDisplayHandlingItem = {
    formDisplayHandling,
    setFormDisplayHandling
  }

  return(
    <div className="mt-6 transition-animation">
      {(() => {
        if(formDisplayHandling === false) {
          return(
            <div>
              <LogInForm/>
              <Link 
                text='新規登録はこちらから' 
                onClickEvent={toggleForm}
                onClickEventArgument={handlingItem}
                classValueAnchorContainer="level-item mt-5"
                classValueAnchor="other-link"
              />
            </div>
          )
        } else {
          return(
            <div>
              <SignUpForm/>
              <Link 
                text='ログインはこちらから'
                onClickEvent={toggleForm}
                onClickEventArgument={handlingItem}
                classValueAnchorContainer="level-item mt-5"
                classValueAnchor="other-link"
              />
            </div>
          )
        }
      })()}
    </div>
  )
}

export default FirstForm;