import { Layout } from '../../layout';
import { Heading, Padding, Margin } from '../../ui';
import React, { FC } from 'react';
import { Text } from 'react-native';

export const Support: FC = () => {
  return (
    <Layout>
      <Padding>
        <Heading title="Support" />
        <Margin />
        <Text>Coming soon</Text>
      </Padding>
    </Layout>
  );
};
