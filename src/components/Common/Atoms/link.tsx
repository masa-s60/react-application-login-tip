import { FC } from "react";
import { linkProps } from "../../../types/type";

const Link: FC<linkProps> = (props) => {

  return(
    <div className={props.classValueAnchorContainer}>
      <a
        className={props.classValueAnchor}
        onClick={() => props.onClickEvent && props.onClickEvent()}
      >
        {props.children}
      </a>
    </div>
  )
}

export default Link;