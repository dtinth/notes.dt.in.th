import {
  getAuth,
  GithubAuthProvider,
  signInWithPopup,
  signOut as signOutFromFirebase,
  User,
} from "firebase/auth"
import memoizeOne from "memoize-one"
import { app } from "../firebase-app"

interface Auth {
  subscribeToAuthState: (f: () => void) => () => void
  getAuthState: () => AuthState
  signIn: () => void
  signOut: () => void
}

class FirebaseAuth implements Auth {
  auth = getAuth(app)

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

const auth: Auth = new FirebaseAuth()

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
