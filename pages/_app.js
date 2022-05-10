import '../styles/globals.css';
import ThemeConfig from '../theme';
import Layout from '../layout/Layout';
function MyApp({ Component, pageProps }) {
  return (
    <ThemeConfig>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeConfig>
  );
}

export default MyApp;
