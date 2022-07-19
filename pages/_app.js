import "regenerator-runtime/runtime";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import ThemeConfig from "../theme";
import Layout from "../layout/Layout";
import AuthLayout from "../layout/AuthLayout";
import Axios from "axios";
import { UserContext, PlayContext } from "../context/userContext";
import { useState, useEffect } from "react";

Axios.defaults.baseURL = "http://localhost:80/";

function MyApp({ Component, pageProps, router }) {
  const [user, setUser] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {}, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <PlayContext.Provider value={{ isPlaying, setIsPlaying }}>
        <ThemeConfig>
          {router.pathname.startsWith("/auth") ? (
            <AuthLayout>
              <Component {...pageProps} />
            </AuthLayout>
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </ThemeConfig>
      </PlayContext.Provider>
    </UserContext.Provider>
  );
}

export default MyApp;
