import dynamic from "next/dynamic";

export const AuthInspector = dynamic(() => import("./AuthInspector"), {
  ssr: false,
});
