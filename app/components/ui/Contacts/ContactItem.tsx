import { IContact } from '../../../hooks/useContacts';
import { Avatar } from '../Avatar/Avatar';
import React, { FC } from 'react';
import { View, Text, Pressable } from 'react-native';

export const ContactItem: FC<{ contact: IContact }> = ({ contact }) => {
  return (
    <Pressable
      style={{
        alignItems: 'center',
        marginRight: 4,
        marginLeft: 16,
      }}
    >
      <Avatar name={contact.displayName} size="large" />
      <Text>{contact.displayName}</Text>
    </Pressable>
  );
};
