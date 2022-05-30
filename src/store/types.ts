// --------------- auth ---------------
// login user data
type LoginData = {
  path: string,
  email: string,
  password: string | number,
}
// master info or target friend info
type TUserInfo = {
  uid: string,
  email: string,
  username: string,
  avatar: string,
  contacts: string,
  timestamp: string,
}
// target info -- group
type TTargetGroup = {
  gid: string,
  gname: string,
  gavatar: string,
  gmember?: string,
  timestamp: string,
}

// --------------- chat ---------------
type TMsg = {
  content: string,
  from: string,
  to: string,
  group: string,
  timestamp: number,
  type?: string
}
type TCvs = {
  data: TMsg,
  type?: string,
}
type TMsgQueue = {
  [key: string]: { [key: string]: Array<TMsg> }
}
type TLastMsg = {
  id: string,
  master: string,
  msg: TMsg,
  mute?: boolean,
  top?: boolean,
  unreadNum: number
}

// --------------- helper ---------------
type TModal = {
  show: boolean,
  title?: string | number,
  msg?: string,
}

export {
  LoginData, TUserInfo, TTargetGroup, TMsg, TCvs, TMsgQueue, TLastMsg, TModal
}
