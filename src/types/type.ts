import { Dispatch, ReactNode, SetStateAction, CSSProperties } from "react";
import { UseFormRegister, FieldValues } from 'react-hook-form';

export type typeChildren = {
  children: ReactNode
};

export type typeSetDisplayHandling = Dispatch<SetStateAction<boolean>>;
export type typeFormDisplayHandlingItem = {
  formDisplayHandling: boolean,
  setFormDisplayHandling: typeSetDisplayHandling,
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

export type useStateSetUser = Dispatch<SetStateAction<typeUser | undefined>>;
export type typeUser = {
  UserName: string,
  Email: string,
  Password: string,
  Tip?: number | string,
}

export type typeAuthState = {
  user: typeUser | undefined,
  setUser: useStateSetUser
};

export type inputProps = {
  name: string,
  type: string,
  register: UseFormRegister<FieldValues>,
  classValueInputContainer?: string,
  styleValueInputContainer?: CSSProperties,
  classValueInput?: string,
  styleValueInput?: CSSProperties,
  classValueLabel?: string,
  styleValueLabel?: CSSProperties,
  label?: string,
  maxLength?: number,
  onChangeEvent?: Function,
  onChangeEventArgument?: any,
  onFocusEvent?: Function,
  onFocusEventArgument?: any
};

export type buttonProps = {
  classValueButtonContainer?: string,
  styleValueButtonContainer?: CSSProperties,
  classValueButton?: string,
  styleValueButton?: CSSProperties,
  text: string,
  type: 'submit' | 'reset' | 'button' | undefined,
  onClickEvent?: Function,
  onClickEventArgument?: any,
}

export type textProps = {
  classValueTextContainer?: string,
  styleValueTextContainer?: CSSProperties,
  classValueText?: string,
  styleValueText?: CSSProperties,
  children: ReactNode | undefined,
}

export type iconProps = {
  classValueIconContainer?: string,
  styleValueIconContainer?: CSSProperties,
  classValueIcon: string,
  styleValueIcon?: CSSProperties,
}

export type linkProps = {
  text: string,
  onClickEvent?: Function,
  onClickEventArgument?: typeFormDisplayHandlingItem,
  classValueAnchorContainer?: string,
  styleValueAnchorContainer?: CSSProperties,
  classValueAnchor?: string,
  styleValueAnchor?: CSSProperties,
}

export type useStateSetString = Dispatch<SetStateAction<string>>;



