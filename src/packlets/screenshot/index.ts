import Encrypted from "@dtinth/encrypted"
import jsonwebtoken from "jsonwebtoken"

function getSigningKey(): string | undefined {
  if (!process.env.ENCRYPTION_SECRET) {
    return
  }
  const encrypted = Encrypted()
  return encrypted`
    gvU23oOlDmr78OMyxOoxrfx+u4uXsb7K.3diL6SLwYXkNcwARhGvsEc2NhhUYEmfAf1frYtI
    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
    QQ3C6AnOvVe8A3yr2Ok86FlHY
  `
}

export function getScreenshotImageUrl(pageUrl: string) {
  const signingKey = getSigningKey()
  if (!signingKey) {
    return
  }
  const token = jsonwebtoken.sign(
    {
      url: pageUrl,
      width: 900,
      height: 840,
      deviceScaleFactor: 2,
      waitUntil: "networkidle0",
    },
    signingKey,
    {
      algorithm: "RS256",
      issuer: "journal-web",
      noTimestamp: true,
    }
  )
  return `https://capture.the.spacet.me/${token}.png`
}
