// "use client";

import Navbar from "./navbar";

// import { useRouter } from "next/navigation";
// import { useSyncExternalStore, useTransition } from "react";

// import { disableDraftMode } from "./actions";

// const emptySubscribe = () => () => {};

export default function AlertBanner() {
  // const router = useRouter();
  // const [pending, startTransition] = useTransition();

  // const shouldShow = useSyncExternalStore(
  //   emptySubscribe,
  //   () => window.top === window,
  //   () => false,
  // );

  // if (!shouldShow) return null;

  return (
    <div
      className=" fixed top-0 left-0 z-50 w-full border-b bg-white/95 text-black backdrop-blur"
    >  <Navbar/>
      {/* <div className="py-1 text-center text-sm">
  
      </div> */}
    </div>
  );
}
