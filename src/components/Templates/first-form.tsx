import { FC, useState } from "react";
import LoginForm from "../Features/login-form";
import SignUpForm from "../Features/sign-up-from";
import Link from "../Common/Atoms/link";
import { toggleForm } from "../Container/transition-func";
import { typeFormDisplayHandlingItem, typeUser } from "../../types/type";
import { SetterOrUpdater } from "recoil";

const FirstForm: FC<{setSession: SetterOrUpdater<typeUser>}> = (props) => {

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
              <SignUpForm setSession={props.setSession}/>
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