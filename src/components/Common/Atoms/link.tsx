import { FC } from "react";
import { linkProps } from "../../../types/type";

const Link: FC<linkProps> = (props) => {

  const onClickEvent = () => {
    if(props.onClickEvent) {
      props.onClickEvent(props.onClickEventArgument);
    }
  }

  return(
    <div className={props.classValueAnchorContainer}>
      <a
        className={props.classValueAnchor}
        onClick={() => onClickEvent()}
      >
        {props.text}
      </a>
    </div>
  )
}

export default Link;