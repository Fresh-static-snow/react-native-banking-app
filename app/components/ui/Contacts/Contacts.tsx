import { useContacts } from '../../../hooks';
import { Heading } from '../Heading/Heading';
import { Loader } from '../Loader';
import { ContactItem } from './ContactItem';
import React from 'react';
import { View, Text } from 'react-native';

export const Contacts = () => {
  const { contacts, loading } = useContacts();
  return (
    <View>
      {loading && <Loader />}
      {contacts &&
        contacts.map(contact => <ContactItem key={contact._id} contact={contact} />)}
    </View>
  );
};
