import { FC } from 'react';
import { typeSetShow, typeSetActive } from '../../../types/type';

const ModalWalletButton: FC<{setShowModal: typeSetShow, setActive: typeSetActive}> = (props) => {

  const closeModal = () => {
    props.setActive(false);
    setTimeout( () => {
      props.setShowModal(undefined);
    }, 700);
  }

  return(
    <div className="modal-window-button-field">
      <button className="close-button-style" onClick={() => closeModal()}>閉じる</button>
    </div>
  )
}

export default ModalWalletButton;