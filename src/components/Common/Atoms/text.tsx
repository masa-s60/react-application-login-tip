import { FC } from "react";
import { textProps } from "../../../types/type";

const Text: FC<textProps> = (props) => {

  return(
    <div className={props.classValueTextContainer} style={props.styleValueTextContainer}>
      {props.children}
    </div>
  )
}

export default Text;