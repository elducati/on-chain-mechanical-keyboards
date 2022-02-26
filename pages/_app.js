import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  <Toaster />
  return <Component {...pageProps} />
}

export default MyApp
