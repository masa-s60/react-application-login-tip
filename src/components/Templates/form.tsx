import { useState } from "react";
import LogInForm from "../Features/login-form";
import SignUpForm from "../Features/sign-up-from";
import OtherLink from "../Common/atoms/other-link";
import { typeSignUpDisplayHandlingItem } from "../../types/type";

const Form = () => {
  const [signUpDisplayHandling, setSignUpDisplayHandling] = useState<boolean>(false);
  const signUpItems: typeSignUpDisplayHandlingItem = {
    signUpDisplayHandling,
    setSignUpDisplayHandling
  }

  return(
    <div className="mt-6 transition-animation">
      {(() => {
        if(signUpDisplayHandling === false) {
          return(
            <div>
              <LogInForm/>
              <OtherLink link='新規登録はこちらから' signUpItems={signUpItems}/>
            </div>
          )
        } else {
          return(
            <div>
              <SignUpForm/>
              <OtherLink link='ログインはこちらから' signUpItems={signUpItems}/>
            </div>
          )
        }
      })()}
    </div>
  )
}

export default Form;