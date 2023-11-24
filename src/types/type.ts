import { Dispatch, ReactNode, SetStateAction, CSSProperties, ChangeEvent } from "react";

export type typeChildren = {
  children: ReactNode,
}

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
  userInfo?: typeUser,
  setUserInfo: useStateSetUserInfo,
}

export type useStateSetUsers = Dispatch<SetStateAction<Partial<typeUser>[]>>;
export type useStateTypeUsers = {
  users: Partial<typeUser>[],
  setUsers: useStateSetUsers,
}

export type useStateSetUser = Dispatch<SetStateAction<typeUser | undefined>>;
export type typeUser = {
  UserName?: string,
  Email?: string,
  Password?: string,
  Tip?: number | string,
}

export type typeAuthState = {
  user?: typeUser,
  setUser: useStateSetUser
}

export type inputProps = {
  name: string,
  type: string,
  value: string,
  classValueInputContainer?: string,
  styleValueInputContainer?: CSSProperties,
  classValueInput?: string,
  styleValueInput?: CSSProperties,
  classValueLabel?: string,
  styleValueLabel?: CSSProperties,
  label?: string,
  maxLength?: number,
  placeholder?: string,
  onChangeEvent: ((S?: string) => void),
  onFocusEvent?: (() => void),
}

export type buttonProps = {
  children?: ReactNode | string,
  classValueButtonContainer?: string,
  styleValueButtonContainer?: CSSProperties,
  classValueButton?: string,
  styleValueButton?: CSSProperties,
  type?: 'submit' | 'reset' | 'button',
  onClickEvent?: () => void,
}

export type textProps = {
  children?: ReactNode | string,
  classValueTextContainer?: string,
  styleValueTextContainer?: CSSProperties,
}

export type iconProps = {
  classValueIconContainer?: string,
  styleValueIconContainer?: CSSProperties,
  classValueIcon: string,
  styleValueIcon?: CSSProperties,
}

export type linkProps = {
  children?: ReactNode | string,
  onClickEvent?: () => void,
  classValueAnchorContainer?: string,
  styleValueAnchorContainer?: CSSProperties,
  classValueAnchor?: string,
  styleValueAnchor?: CSSProperties,
}

export type useStateSetString = Dispatch<SetStateAction<string>>;



