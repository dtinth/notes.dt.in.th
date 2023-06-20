import { NextApiRequest, NextApiResponse } from "next"
import { createRemoteJWKSet, jwtVerify } from "jose"

const issuer = "https://accounts.google.com"
const keySetUrl = new URL("https://www.googleapis.com/oauth2/v3/certs")
const audience = "https://notes.dt.in.th"
const keySet = createRemoteJWKSet(keySetUrl)

function validate(jwt: string) {
  return jwtVerify(jwt, keySet, { issuer, audience })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const idToken = req.headers.authorization?.split("Bearer ")[1]
    if (!idToken) {
      return res.status(401).send("Unauthorized")
    }
    const { payload } = await validate(idToken)
    if (!payload.email_verified) {
      return res.status(401).send("Unauthorized (email not verified)")
    }
    if (
      payload.email !==
      "firebase-adminsdk-6u6c0@dtinth-notes.iam.gserviceaccount.com"
    ) {
      return res.status(401).send("Unauthorized (wrong email)")
    }
    await res.revalidate(req.query.path as string)
    return res.json({ revalidated: true })
  } catch (err) {
    console.error("Error revalidating", err)
    return res.status(500).send("Error revalidating")
  }
}
