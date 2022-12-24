import dynamic from "next/dynamic"
import { FC, ReactNode, Suspense } from "react"
import { AuthUser } from "./firebase"

export const AuthStateConnector = dynamic(
  () => import("./AuthStateConnector"),
  { ssr: false }
)

export interface SignedInOnly {
  children: (user: AuthUser) => ReactNode
}

export const SignedInOnly: FC<SignedInOnly> = (props) => {
  return (
    <Suspense fallback={<></>}>
      <AuthStateConnector>
        {(state) => (state.user ? props.children(state.user) : <></>)}
      </AuthStateConnector>
    </Suspense>
  )
}
