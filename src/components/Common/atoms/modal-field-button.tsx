import { FC } from 'react';
import { useStateTypeShow } from '../../../types/type';

const ModalFieldButton:FC<{buttonValue: string, showModalItem: useStateTypeShow}> = (props) => {
  return(
    <div className="modal-window-button-field">
      <button 
        className="close-button-style"
        type="submit"
      >
        {props.buttonValue}
      </button>
    </div>
  )
}

export default ModalFieldButton;