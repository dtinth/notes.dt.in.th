import dynamic from "next/dynamic"
import { FC, ReactNode, Suspense } from "react"
import { AuthUser } from "./Auth"
import { useAuthState } from "./useAuthState"

export interface SignedInOnly {
  children: (user: AuthUser) => ReactNode
}

export const SignedInOnly: FC<SignedInOnly> = (props) => {
  const state = useAuthState()
  return <>{state?.user ? props.children(state.user) : <></>}</>
}
