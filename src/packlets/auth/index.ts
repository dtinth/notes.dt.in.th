import dynamic from "next/dynamic";
export * from "./SignedInOnly";

export const AuthInspector = dynamic(() => import("./AuthInspector"), {
  ssr: false,
});
