import { collection, getDocs, doc, query, where, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { typeUser } from "../../types/type";

export const getAllUsersDocuments = async () => {
  let arrayUsers = [];
  const querySnapshot = await getDocs(collection(db, 'users'));
  for(const usersDoc of querySnapshot.docs) {
    arrayUsers.push(usersDoc.data());
    console.log(arrayUsers);
  }
  return arrayUsers;
}

export const getUserStatus = async (Email: string, Password: string) => {
  const usersCollectionRef = collection(db, 'users');
  const querySnapshot = await getDocs(usersCollectionRef);
  const userInfo = querySnapshot.docs.find(usersDoc => (usersDoc.data().Email === Email) && (usersDoc.data().Password === Password));
  if(userInfo === undefined) {
    return undefined;
  } else {
    return {
      UserName: userInfo?.data().UserName,
      Email: userInfo?.data().Email,
      Password: userInfo?.data().Password,
      Tip: userInfo?.data().Tip,
    }
  }
}

export const checkRegistered = async (targetRef: any, mail: string, pass: string) => {
  const queryEmail = query(targetRef, where('Email', '==', mail));
  const queryPassword = query(targetRef, where('Password', '==', pass));
  const registeredEmail = await getDocs(queryEmail);
  const registeredPassword = await getDocs(queryPassword);
  return {mail: !!registeredEmail.docs.length, pass: !!registeredPassword.docs.length}
}

export const updateTip = async (targetInfo: typeUser | undefined, inputMoney: number) => {
  const usersCollectionRef = collection(db, 'users');
  const querySnapshot = await getDocs(usersCollectionRef);
  const userDoc = querySnapshot.docs.find(usersDoc => (usersDoc.data().Email === targetInfo?.Email) && (usersDoc.data().Password === targetInfo?.Password));
  const userInfo = userDoc?.data();
  if(userInfo === undefined) {
    return userInfo;
  } else {
    const myInfoID = userDoc?.id;
    const usersDocRef = doc(db, 'users', myInfoID as string);
    const balance = userInfo?.Tip + inputMoney;
    await updateDoc(usersDocRef, { Tip: balance });
    return {
      ...userInfo,
      Tip: balance,
    } as typeUser
  }
}
