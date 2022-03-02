import '../styles/globals.css'
import ThemeConfig from '../theme';
// import ScrollToTop from '../components/scrollToTop';
function MyApp({ Component, pageProps }) {
  return <ThemeConfig>
    {/* <ScrollToTop /> */}
    <Component {...pageProps} />
  </ThemeConfig>
}

export default MyApp
