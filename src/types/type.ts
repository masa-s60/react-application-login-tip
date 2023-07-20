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

// export type useStateSetUser = Dispatch<SetStateAction<typeUser | undefined>>;
// export type useStateTypeUser = {
//   user: string,
//   setUser: useStateSetUser,
// }

export type useStateSetUserInfo = Dispatch<SetStateAction<typeUser | undefined>>;
export type useStateTypeUserInfo = {
  userInfo: typeUser | undefined,
  setUserInfo: useStateSetUserInfo,
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
  type: Path<FormValues>;
  register: UseFormRegister<FieldValues>;
};

export type typeUserList = Record<string, string | number>[];

export type useStateSetMoney = Dispatch<SetStateAction<string>>;



