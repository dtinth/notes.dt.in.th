import {
  getAuth,
  GithubAuthProvider,
  signInWithPopup,
  signOut as signOutFromFirebase,
  User,
} from "firebase/auth"
import memoizeOne from "memoize-one"
import { app } from "../firebase-app"
import { isQueryFlagEnabled } from "query-flags"
import Cookies from "js-cookie"

interface Auth {
  subscribeToAuthState: (f: () => void) => () => void
  getAuthState: () => AuthState
  signIn: () => void
  signOut: () => void
}

class FirebaseAuth implements Auth {
  auth = getAuth(app)

  constructor() {
    this.subscribeToAuthState(() => {
      const authState = this.getAuthState()
      const cookiesAllowed =
        location.hostname === "notes.localhost" ||
        location.hostname.endsWith(".dt.in.th")
      if (authState.user) {
        authState.user.getIdToken().then((token) => {
          if (cookiesAllowed) {
            Cookies.set("notes_id_token", token)
          }
        })
      } else {
        if (cookiesAllowed) {
          Cookies.remove("notes_id_token")
        }
      }
    })
  }

  subscribeToAuthState(f: () => void) {
    return this.auth.onAuthStateChanged(f)
  }

  getAuthState() {
    return this.resolveAuthState(this.auth.currentUser)
  }

  private resolveAuthState = memoizeOne(
    (currentUser: User | null): AuthState => {
      return {
        user: currentUser
          ? {
              uid: currentUser.uid,
              displayName:
                currentUser.displayName || currentUser.email || currentUser.uid,
              getIdToken: () => currentUser.getIdToken(),
            }
          : null,
      }
    }
  )

  signIn() {
    signInWithPopup(this.auth, new GithubAuthProvider()).catch((e) => {
      console.error(e)
      alert("Failed to sign in")
    })
  }

  signOut() {
    signOutFromFirebase(this.auth).catch((e) => {
      console.error(e)
      alert("Failed to sign out")
    })
  }
}
class MockAuth implements Auth {
  authState: AuthState = { user: null }
  listeners = new Set<() => void>()

  constructor() {
    if (isQueryFlagEnabled("signedIn")) {
      this.signIn()
    }
  }

  subscribeToAuthState(f: () => void) {
    this.listeners.add(f)
    return () => {
      this.listeners.delete(f)
    }
  }

  getAuthState() {
    return this.authState
  }

  signIn() {
    this.authState = {
      user: {
        uid: "mock",
        displayName: "Mock User",
        getIdToken: () => Promise.resolve("mock"),
      },
    }
    this.listeners.forEach((f) => f())
  }

  signOut() {
    this.authState = { user: null }
    this.listeners.forEach((f) => f())
  }
}

const auth: Auth = isQueryFlagEnabled("mock")
  ? new MockAuth()
  : new FirebaseAuth()

export function subscribeToAuthState(f: () => void) {
  return auth.subscribeToAuthState(f)
}

export interface AuthState {
  user: AuthUser | null
}

export interface AuthUser {
  uid: string
  displayName: string
  getIdToken: () => Promise<string>
}

export function getAuthState(): AuthState {
  return auth.getAuthState()
}

export function signIn() {
  return auth.signIn()
}

export function signOut() {
  return auth.signOut()
}
