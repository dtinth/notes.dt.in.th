import { NextPage } from "next"
import { AuthInspector } from "../../src/packlets/auth"

const Auth: NextPage = () => {
  return (
    <>
      <h1>Authentication page</h1>
      <AuthInspector />
    </>
  )
}

export default Auth
