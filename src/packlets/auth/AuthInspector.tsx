import { FC } from "react"
import { signIn, signOut } from "./Auth"
import { useAuthState } from "./useAuthState"

const AuthInspector: FC = () => {
  const state = useAuthState()
  return (
    <>
      <pre>
        <code>{JSON.stringify(state, null, 2)}</code>
      </pre>
      <p>
        {!state ? (
          <>Loading</>
        ) : state.user ? (
          <button onClick={signOut}>Sign Out</button>
        ) : (
          <button onClick={signIn}>Sign In</button>
        )}
      </p>
    </>
  )
}

export default AuthInspector
