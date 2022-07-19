import 'regenerator-runtime/runtime';
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import ThemeConfig from "../theme";
import Layout from "../layout/Layout";
import AuthLayout from "../layout/AuthLayout";
import Axios from "axios";
import { UserContext } from "../context/userContext";
import { useState, useEffect } from "react";

Axios.defaults.baseURL = "http://localhost:80/";

function MyApp({ Component, pageProps, router }) {
  const [user, setUser] = useState(null);
  useEffect(() => {}, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
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
    </UserContext.Provider>
  );
}

export default MyApp;
