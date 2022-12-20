import { StoryContainer } from './app/components/ui/Stories/StoryContainer';
import { Navigation } from './app/navigation';
import { AuthProvider, DataProvider } from './app/providers';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { LogBox, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, marginTop: 25 }}>
      <DataProvider>
        <AuthProvider>
          <StatusBar translucent={true} />
          <StoryContainer />
          <Navigation />
        </AuthProvider>
      </DataProvider>
    </View>
  );
}

LogBox.ignoreAllLogs();
