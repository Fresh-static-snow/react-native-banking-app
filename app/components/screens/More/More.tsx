import { Layout } from '../../layout';
import { Heading, Padding } from '../../ui';
import { Currencies } from '../../ui/Currencies/Currencies';
import { Margin } from '../../ui/Margin';
import { PaperMenu } from '../../ui/PaperMenu/PaperMenu';
import React, { FC } from 'react';
import { Text } from 'react-native';

export const More: FC = () => {
  return (
    <Layout>
      <Padding>
        <Heading title="More" />
        <Margin />
        <Currencies />
        <PaperMenu />
        <Margin />
        <Text
          style={{
            textAlign: 'center',
            color: 'grey',
            opacity: 0.5,
          }}
        >
          Version 6.20
        </Text>
      </Padding>
    </Layout>
  );
};
