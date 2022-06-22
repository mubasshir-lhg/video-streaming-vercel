import { useRouter } from "next/router";
import { useState, useEffect } from "react";
// import NProgress from "nprogress"; //nprogress module
// import "nprogress/nprogress.css"; //styles of nprogress
// NProgress.start()  // this line is for  progress bar at the top of the page
//  NProgress.done()
function useLoading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };
    const handleComplete = () => {
      setLoading(false);
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [loading, router.events]);

  return loading;
}

export default useLoading;
