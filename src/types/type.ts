import { Dispatch, ReactNode, SetStateAction } from "react";
import { Path, UseFormRegister, FieldValues } from 'react-hook-form';

export type typeSetDisplayHandling = Dispatch<SetStateAction<boolean>>;
export type typeSignUpDisplayHandlingItem = {
  signUpDisplayHandling: boolean,
  setSignUpDisplayHandling: typeSetDisplayHandling,
}

export type typeSetShow = Dispatch<SetStateAction<'WALLET' | 'SEND' | undefined>>;
export type useStateTypeShow = {
  showModal: 'WALLET' | 'SEND' | undefined,
  setShowModal: typeSetShow,
}

export type typeSetActive = Dispatch<SetStateAction<boolean>>;
export type useStateTypeActive = {
  active: boolean,
  setActive: typeSetActive
}

export type useStateSetUserInfo = Dispatch<SetStateAction<typeUser | undefined>>;
export type useStateTypeUserInfo = {
  userInfo: typeUser | undefined,
  setUserInfo: useStateSetUserInfo,
}

export type useStateSetUsers = Dispatch<SetStateAction<Partial<typeUser>[]>>;
export type useStateTypeUsers = {
  users: Partial<typeUser>[],
  setUsers: useStateSetUsers,
}


export type typeChildren = {
  children: ReactNode;
};

export type useStateSetTypeUser = Dispatch<SetStateAction<typeUser | undefined>>;
export type typeUser = {
  UserName: string,
  Email: string,
  Password: string,
  Tip?: number | string,
}

export type typeAuthState = {
  user: typeUser | undefined,
  setUser: useStateSetTypeUser
};

export type FormValues = {
  UserName: string,
  Email: string,
  Password: string
}

export type InputProps = {
  type: Path<FormValues>,
  register: UseFormRegister<FieldValues>,
};

export type modalInputItem = {
  register: UseFormRegister<FieldValues>,
  setInputMoney: useStateSetString,
  setErrorMessage: useStateSetString
};

export type useStateSetString = Dispatch<SetStateAction<string>>;



