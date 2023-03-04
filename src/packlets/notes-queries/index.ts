import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { isQueryFlagEnabled } from "query-flags"
import redaxios from "redaxios"
import { useAuthState } from "../auth/useAuthState"

export function useNoteInfoQuery(slug: string) {
  const authState = useAuthState()
  return useQuery({
    enabled: !!authState?.user,
    queryKey: ["info", authState?.user?.uid, slug],
    queryFn: async () => {
      const user = authState?.user
      if (!user) {
        return null
      }

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

export function useNoteFileContentsQueryAndMutation(id?: string) {
  const authState = useAuthState()
  const queryClient = useQueryClient()
  const query = useQuery({
    enabled: !!id && !!authState?.user,
    queryKey: ["noteFileContents", authState?.user?.uid, id],
    queryFn: async () => {
      const user = authState?.user
      if (!user) {
        return null
      }
      if (isQueryFlagEnabled("mock")) {
        return null
      }

      const idToken = await user.getIdToken()
      const baseUrl = await getBaseUrl(idToken)

      const url = `${baseUrl}/v2/synchronize`
      const { data } = await redaxios.post(
        url,
        { id },
        { headers: { authorization: `Bearer ${idToken}` } }
      )
      return data
    },
  })
  const mutation = useMutation({
    mutationKey: ["save", authState?.user?.uid, id],
    mutationFn: async (contents: string) => {
      if (isQueryFlagEnabled("mock")) {
        throw new Error("Editing is disabled in mock mode")
      }
      const hash = query.data?.hash
      if (hash === undefined) {
        throw new Error("No hash")
      }
      const user = authState?.user
      if (!user) {
        throw new Error("Not logged in")
      }

      const idToken = await user.getIdToken()
      const baseUrl = await getBaseUrl(idToken)
      const url = `${baseUrl}/v2/synchronize`
      const { data } = await redaxios.post(
        url,
        {
          id,
          write: {
            contents,
            lastSynchronizedHash: hash,
          },
        },
        { headers: { authorization: `Bearer ${idToken}` } }
      )
      return data
    },
    onError: (error: any) => {
      console.error(error)
      window.alert("Unable to save: " + String(error))
    },
    onSuccess: () => {
      query.refetch()
      queryClient.invalidateQueries(["latestNote", authState?.user?.uid, id])
    },
  })
  return { query, mutation }
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
