import { useQuery, useQueryClient } from "@tanstack/react-query"

let listenerSetUp = false

export function useAuthState() {
  const queryClient = useQueryClient()
  return useQuery({
    queryKey: ["authState"],
    queryFn: async () => {
      const Auth = await import("./Auth")
      if (!listenerSetUp) {
        listenerSetUp = true
        Auth.subscribeToAuthState(() => {
          queryClient.invalidateQueries(["authState"])
        })
      }
      return Auth.getAuthState()
    },
  }).data
}
