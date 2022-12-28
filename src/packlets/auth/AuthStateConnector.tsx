import { FC, ReactNode, useSyncExternalStore } from "react"
import { AuthState, getAuthState, subscribeToAuthState } from "./Auth"

export interface AuthStateConnector {
  children: (state: AuthState) => ReactNode
}

const AuthStateConnector: FC<AuthStateConnector> = (props) => {
  const state = useSyncExternalStore(subscribeToAuthState, getAuthState)
  return <>{props.children(state)}</>
}

export default AuthStateConnector
