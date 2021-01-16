import PropTypes from 'prop-types';

import Head from 'next/head';

import Header from './header';
import Footer from './footer';

function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{[process.env.NEXT_PUBLIC_SITE_NAME, ...[].concat(title)].filter(Boolean).join(' | ')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title={title || process.env.NEXT_PUBLIC_SITE_NAME} />
      {children}
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
};

export default Layout;
