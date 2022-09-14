import { FC, useSyncExternalStore } from "react";
import {
  getAuthState,
  signIn,
  signOut,
  subscribeToAuthState,
} from "./firebase";

const AuthInspector: FC = () => {
  const state = useSyncExternalStore(subscribeToAuthState, getAuthState);
  return (
    <>
      <pre>
        <code>{JSON.stringify(state, null, 2)}</code>
      </pre>
      <p>
        {state.user ? (
          <button onClick={signOut}>Sign Out</button>
        ) : (
          <button onClick={signIn}>Sign In</button>
        )}
      </p>
    </>
  );
};

export default AuthInspector;
