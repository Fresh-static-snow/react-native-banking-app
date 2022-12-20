import { Layout } from '../../layout';
import { Accounts, AddProduct, Header, Margin, Padding, Stories } from '../../ui';
import React, { FC } from 'react';

export const Home: FC = () => {
  return (
    <Layout>
      <Padding>
        <Header />
        <Margin />
        <Stories />
        <Margin />
        <Accounts />
        <AddProduct />
      </Padding>
    </Layout>
  );
};
