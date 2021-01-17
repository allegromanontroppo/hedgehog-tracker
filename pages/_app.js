import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

import '../styles/globals.css';

TimeAgo.addLocale(en);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
