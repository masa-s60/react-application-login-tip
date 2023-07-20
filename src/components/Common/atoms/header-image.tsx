import { FC } from "react";

const HeaderImage:FC<{iconValue: string}> = (props) => {
  return(
    <div className="level-item" style={{marginTop: '4vw',marginBottom: '10vw'}}>
      <span className="icon">
        <i className={props.iconValue} style={{fontSize: '12vw'}}></i>
      </span>
    </div>
  )
}

export default HeaderImage;