import React from 'react';
import Proptypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';
import withReduxSaga from 'next-redux-saga';
import wrapper from '../store/configureStore';

const reactBoard = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>reactBoard</title>
    </Head>
    <Component />
  </>
);

reactBoard.propTypes = {
  Component: Proptypes.func.isRequired,
};
export default wrapper.withRedux(withReduxSaga(reactBoard));
