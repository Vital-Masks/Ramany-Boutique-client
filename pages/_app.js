import React from 'react';
import '../styles/globals.css';

import Layout from '../components/Layout';

import { CartContextProvider } from '../context/cartContext';
import { ProductContextProvider } from '../context/productContext';
import { CategoryContextProvider } from '../context/categoryContext';
import { JewelleryContextProvider } from '../context/jewelleryContext';

function MyApp({ Component, pageProps }) {
  return (
    <JewelleryContextProvider>
      <CartContextProvider>
        <ProductContextProvider>
          <CategoryContextProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CategoryContextProvider>
        </ProductContextProvider>
      </CartContextProvider>
    </JewelleryContextProvider>
  );
}

export default MyApp;
