import "../styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import ThemeConfig from "../theme";
import Layout from "../layout/Layout";
import AuthLayout from "../layout/AuthLayout";
import Axios from "axios"
import { UserContext } from "../context/userContext";
import { useState } from "react";
import {loginWithToken,getAccessToken,logout} from "../services/auth-services"
import {useEffect} from "react";
Axios.defaults.baseURL="http://localhost:80/"

function MyApp({ Component, pageProps, router }) {
  const[user,setUser] = useState(null);
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    const token = getAccessToken();
    if (token !== null) {
      loginWithToken(token)
        .then((res) => {
          console.log(res);
          if (res?.data) {
            setUser(res?.data?.user);
            router.push("/home/")
          } else {
            setUser(null);
            logout();
          }
        })
        .catch((err) => {
          setUser(null);
          logout();
        });
    } else {
      setUser(null);
    }
  };

  return (
    <UserContext.Provider value={{user,setUser}} >
    <ThemeConfig>
      {
       router.pathname.startsWith("/auth")? <AuthLayout>
        <Component {...pageProps} />
      </AuthLayout>:<Layout>
        <Component {...pageProps} />
      </Layout>
      }
      
    </ThemeConfig>
    </UserContext.Provider>
  );
}

export default MyApp;
