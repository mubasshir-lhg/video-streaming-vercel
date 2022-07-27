import "regenerator-runtime/runtime";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import ThemeConfig from "../theme";
import Layout from "../layout/Layout";
import AuthLayout from "../layout/AuthLayout";
import Axios from "axios";
import {
  UserContext,
  PlayContext,
  DrawerContext,
} from "../context/userContext";
import { useState, useEffect } from "react";

Axios.defaults.baseURL = "http://localhost:80/";

function MyApp({ Component, pageProps, router }) {
  const [user, setUser] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeRoute, setActiveRoute] = useState(0);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <PlayContext.Provider value={{ isPlaying, setIsPlaying }}>
        <DrawerContext.Provider value={{ activeRoute, setActiveRoute }}>
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
        </DrawerContext.Provider>
      </PlayContext.Provider>
    </UserContext.Provider>
  );
}

export default MyApp;
