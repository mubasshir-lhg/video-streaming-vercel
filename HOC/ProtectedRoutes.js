/* eslint-disable react/display-name */
import { useRouter } from "next/router";

const withAuth = (ProtectedComponent) => {
  return (props) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      const Router = useRouter();
      const accessToken = ' ';
      if (!accessToken) {
        Router.replace("/unAuthorized");
        return null;
      }
      return <ProtectedComponent {...props} />;
    }
    // If we are on server, return null
    return null;
  };
};

export default withAuth;
