import ProgressBar from '@badrap/bar-of-progress';
import '@/styles/globals.css';
import { Router } from 'next/router';

const progress = new ProgressBar({
  size: 4,
  color: '#FD5B61',
  className: 'bar-of-progres',
  delay: 80,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
