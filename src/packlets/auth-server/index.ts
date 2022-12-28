import Encrypted from "@dtinth/encrypted"
import { createRemoteJWKSet, jwtVerify } from "jose"
import { NextApiRequest } from "next"

export const firebaseIssuer = "https://securetoken.google.com/dtinth-notes"
const keySetUrl = new URL(
  "https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com"
)
const audience = "dtinth-notes"
const keySet = createRemoteJWKSet(keySetUrl)

export function validateFirebaseJwt(jwt: string) {
  return jwtVerify(jwt, keySet, { issuer: firebaseIssuer, audience })
}

export async function authenticateFirebase(req: NextApiRequest) {
  const encrypted = Encrypted()
  const sub = encrypted`HdJTLMgMG+ZfYHez+7idIIj20dcLPJhl.EL0JiIN9dF/SANPsM55coJ6OMMRK3S/AESwWH0vbt9vzh5C3YzQl12OD/dDS/w==`
  const jwt = req.headers.authorization?.replace(/^Bearer /, "")
  if (!jwt) {
    throw new Error("No JWT")
  }
  const { payload } = await validateFirebaseJwt(jwt)
  if (payload.sub !== sub) {
    throw new Error("Invalid JWT")
  }
  return payload
}
