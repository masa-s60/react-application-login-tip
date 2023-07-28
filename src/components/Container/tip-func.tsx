import { typeUser } from "../../types/type";
import { updateTip } from "./firestore-connection";

export const sendTip = async (myInfo: typeUser | undefined, sendTargetInfo: typeUser | undefined, inputMoney: string) => {
  if(myInfo?.Tip as string < inputMoney) {
    return ['NOTENOUGH', 'CANTSEND']
  }
  const sendMyResult = await updateTip(myInfo, -(Number(inputMoney)));
  const sentTargetResult = await updateTip(sendTargetInfo, Number(inputMoney));
  return [sendMyResult, sentTargetResult];
}