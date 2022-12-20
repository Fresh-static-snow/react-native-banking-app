import { Layout } from '../../layout';
import { Heading } from '../../ui';
import { ServiceItem } from './ServiceItem';
import { listGenerator } from './Support';
import React, { FC } from 'react';
import { View } from 'react-native';

export const Services: FC = () => {
  return (
    <Layout>
      <Heading isCenter title="Kyiv" />
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {listGenerator(40).map((service, index) => (
          <ServiceItem key={index} service={service} />
        ))}
      </View>
    </Layout>
  );
};
