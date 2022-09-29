import {
  getAuth,
  GithubAuthProvider,
  signInWithPopup,
  signOut as signOutFromFirebase,
  User,
} from "firebase/auth";
import memoizeOne from "memoize-one";
import { app } from "../firebase-app";

const auth = getAuth(app);

export function subscribeToAuthState(f: () => void) {
  return auth.onAuthStateChanged(f);
}

export interface AuthState {
  user: AuthUser | null;
}

export interface AuthUser {
  uid: string;
  displayName: string;
}

export function getAuthState(): AuthState {
  return resolveAuthState(auth.currentUser);
}

const resolveAuthState = memoizeOne((currentUser: User | null): AuthState => {
  return {
    user: currentUser
      ? {
          uid: currentUser.uid,
          displayName:
            currentUser.displayName || currentUser.email || currentUser.uid,
        }
      : null,
  };
});

export function signIn() {
  signInWithPopup(auth, new GithubAuthProvider()).catch((e) => {
    console.error(e);
    alert("Failed to sign in");
  });
}

export function signOut() {
  signOutFromFirebase(auth).catch((e) => {
    console.error(e);
    alert("Failed to sign out");
  });
}
