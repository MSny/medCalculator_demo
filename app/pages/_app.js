import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import withRedux from "next-redux-wrapper";
import store from '../../redux/store';

import Layout from '../components/Layout';

class Admin extends App {
  constructor() {
    super();
    this.state = {};
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
          <Layout>
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </Layout>
      </Container>
    );
  }
}

const makeStore = () => store;

export default withRedux(makeStore)(Admin);