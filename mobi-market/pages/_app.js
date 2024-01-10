import '../styles/global.css';  // Update the import path
import '../interceptors/axios';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;