import { typeUser, typeSetActive, typeSetShow } from "../../types/type";
import { updateTip } from "./firestore-connection";

export const sendTip = async (myInfo: typeUser | undefined, sendTargetInfo: typeUser | undefined, inputMoney: string) => {
  const sendMyResult = await updateTip(myInfo, -(Number(inputMoney)));
  const sentTargetResult = await updateTip(sendTargetInfo, Number(inputMoney));
  return [sendMyResult, sentTargetResult];
}

export const fadeOutModal = (setShowModal: typeSetShow, setActive: typeSetActive) => {
  setActive(false);
  setTimeout( () => {
    setShowModal(undefined);
  }, 700);
}

