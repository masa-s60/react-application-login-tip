import { getUserStatus, checkRegistered } from "./firestore-connection";
import { FieldValues } from "react-hook-form";
import { db } from '../../firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { typeFormDisplayHandlingItem } from "../../types/type";

export const signUp = ({UserName, Email, Password}: FieldValues): any => {
  return new Promise( (resolve) => {
    const usersCollectionRef = collection(db, 'users');
    checkRegistered(usersCollectionRef, Email, Password)
    .then( ({mail, pass}) => {
      if(mail === true || pass === true) {
        resolve(false);
      } else {
        addDoc(usersCollectionRef, {
          UserName: UserName,
          Email: Email,
          Password: Password,
          Tip: 1000,
        });
        getUserStatus(Email, Password)
        .then((response) => {
          if(response === undefined) {
            resolve(false);
          } else {
            resolve(response);
          }
        })
      }
    })
  });
}

export const login = ({Email, Password}: FieldValues): any => {
  return new Promise( (resolve) => {
    getUserStatus(Email, Password)
    .then( (response) => {
      if(response === undefined) {
        resolve(false);
      } else {
        resolve(response);
      }
    })
  });
}

export const logout = (context: any, navigate: any) => {
  context?.setUser(undefined);
  navigate("/");
}

export const toggleForm = (handlingItem: typeFormDisplayHandlingItem) => {
  handlingItem.setFormDisplayHandling(!handlingItem.formDisplayHandling);
}