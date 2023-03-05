import { useEffect } from "react"

export function setupAnalytics() {
  import("./firebase")
}

export function Analytics() {
  useEffect(() => {
    setupAnalytics()
  }, [])
  return <></>
}
