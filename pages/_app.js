import "../styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import ThemeConfig from "../theme";
import Layout from "../layout/Layout";
import AuthLayout from "../layout/AuthLayout";
import Axios from "axios"

Axios.defaults.baseURL="http://localhost:80/"

function MyApp({ Component, pageProps, router }) {
  if (router.pathname.startsWith("/auth")) {
    return (
      <ThemeConfig>
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      </ThemeConfig>
    );
  }
  return (
    <ThemeConfig>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeConfig>
  );
}

export default MyApp;
