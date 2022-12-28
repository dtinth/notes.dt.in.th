import dynamic from "next/dynamic"
export * from "./SignedInOnly"
export type { AuthState, AuthUser } from "./Auth"

export const AuthInspector = dynamic(() => import("./AuthInspector"), {
  ssr: false,
})
