import dynamic from "next/dynamic";
import { FC, ReactNode, Suspense } from "react";
import { AuthState } from "./firebase";

const AuthStateConnector = dynamic(() => import("./AuthStateConnector"), {
  ssr: false,
});

export interface SignedInOnly {
  children: (state: AuthState) => ReactNode;
}

export const SignedInOnly: FC<SignedInOnly> = (props) => {
  return (
    <Suspense fallback={<></>}>
      <AuthStateConnector>
        {(state) => (state ? props.children(state) : <></>)}
      </AuthStateConnector>
    </Suspense>
  );
};
