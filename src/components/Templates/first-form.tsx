import { FC, useState } from "react";
import LoginForm from "../Features/Auth/login-form";
import SignUpForm from "../Features/Auth/sign-up-from";
import Link from "../Common/Atoms/link";
import { toggleForm } from "../Container/transition-func";
import { typeFormDisplayHandlingItem, typeUser } from "../../types/type";
import { SetterOrUpdater } from "recoil";

const FirstForm: FC<{setSession: SetterOrUpdater<typeUser | undefined>}> = (props) => {

  const [formDisplayHandling, setFormDisplayHandling] = useState<boolean>(false);

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
              <LoginForm setSession={props.setSession}/>
              <Link 
                onClickEvent={() => toggleForm(handlingItem)}
                classValueAnchorContainer="level-item mt-5"
                classValueAnchor="other-link"
              >
                新規登録はこちらから
              </Link>
            </div>
          )
        } else {
          return(
            <div>
              <SignUpForm setSession={props.setSession}/>
              <Link
                onClickEvent={() => toggleForm(handlingItem)}
                classValueAnchorContainer="level-item mt-5"
                classValueAnchor="other-link"
              >
                ログインはこちらから
              </Link>
            </div>
          )
        }
      })()}
    </div>
  )
}

export default FirstForm;