import { FC } from "react";
import { iconProps } from "../../../types/type";

const IconImage: FC<iconProps>= (props) => {

  return(
    <div className={props.classValueIconContainer} style={props.styleValueIconContainer}>
      <span className="icon">
        <i className={props.classValueIcon} style={props.styleValueIcon}></i>
      </span>
    </div>
  )
}

export default IconImage;