import { useQuery } from "@tanstack/react-query"
import { AuthUser } from "../auth"
import { isQueryFlagEnabled } from "query-flags"
import redaxios from "redaxios"

export function useNoteInfoQuery(user: AuthUser, slug: string) {
  return useQuery({
    queryKey: ["info", slug],
    queryFn: async () => {
      const idToken = await user.getIdToken()
      const baseUrl = await getBaseUrl(idToken)

      if (isQueryFlagEnabled("mock")) {
        return { editUrl: "https://example.org" }
      }

      const url = `${baseUrl}/v2/info?${new URLSearchParams({
        slug: slug,
      })}`
      const { data } = await redaxios.get(url, {
        headers: {
          authorization: `Bearer ${idToken}`,
        },
      })
      return data
    },
  })
}

export async function getBaseUrl(idToken: string) {
  if (isQueryFlagEnabled("mock")) {
    return "https://mock.notes.dt.in.th"
  }

  if (sessionStorage.notesBaseUrl) {
    return sessionStorage.notesBaseUrl
  }
  const { data } = await redaxios.get("/api/server", {
    headers: {
      authorization: `Bearer ${idToken}`,
    },
  })
  const baseUrl = data.baseUrl
  sessionStorage.notesBaseUrl = baseUrl
  return baseUrl
}
