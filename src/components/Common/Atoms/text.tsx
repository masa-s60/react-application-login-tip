import { FC } from "react";
import { textProps } from "../../../types/type";

const Text: FC<textProps> = (props) => {

  return(
    <div className={props.classValueTextContainer} style={props.styleValueTextContainer}>
      <p className={props.classValueText} style={props.styleValueText}>{props.children}</p>
    </div>
  )
}

export default Text;