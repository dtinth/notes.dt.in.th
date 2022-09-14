import { NextPage } from "next";
import { Suspense } from "react";
import { AuthInspector } from "../../src/packlets/auth";

const Auth: NextPage = () => {
  return (
    <>
      <h1>Authentication page</h1>
      <Suspense fallback="Loading…">
        <AuthInspector />
      </Suspense>
    </>
  );
};

export default Auth;
