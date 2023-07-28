import { FC } from 'react';
import { typeSetShow } from '../../../types/type';

const ModalWalletButton: FC<{setShowModal: typeSetShow}> = (props) => {

  const closeModal = () => {
    props.setShowModal(undefined);
    // setTimeout( () => {
    //   props.modalClassToggleItem.setActive(false);
    // }, 700);
  }

  return(
    <div className="modal-window-button-field">
      <button className="close-button-style" onClick={() => closeModal()}>閉じる</button>
    </div>
  )
}

export default ModalWalletButton;