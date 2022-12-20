import { Layout } from '../../layout';
import { Contacts, Margin, Other, Heading, Padding } from '../../ui';
import React, { FC } from 'react';

export const Payments: FC = () => {
  return (
    <Layout>
      <Padding>
        <Heading title="Payments" />
        <Margin />
        <Contacts />
        <Margin />
        <Heading size="medium" title="Other" />
      </Padding>
      <Other />
    </Layout>
  );
};
