import { initializeApp } from "firebase/app";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as signOutFromFirebase,
  User,
} from "firebase/auth";
import memoizeOne from "memoize-one";

const firebaseConfig = {
  apiKey: "AIzaSyApqyhtZsCQig18HWLHjiFbL-cl-Fo6TR4",
  authDomain: "dtinth-notes.firebaseapp.com",
  projectId: "dtinth-notes",
  storageBucket: "dtinth-notes.appspot.com",
  messagingSenderId: "384108821542",
  appId: "1:384108821542:web:3dd7e07a6c062a9ede3ae7",
};

const app = initializeApp(firebaseConfig);
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
