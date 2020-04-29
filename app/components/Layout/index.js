import Head from 'next/head';
import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';


const Layout = ({ children }) => (
  <Fragment>
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
      />
    </Head>
    <Container className="main-wrapper">{children}</Container>
  </Fragment>
);

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Layout;
