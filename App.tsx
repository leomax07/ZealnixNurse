import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppLayout from './src/navigation/AppLayout';
import AppProvider from './src/navigation/AppProvider';

const App = () => {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <AppLayout />
      </AppProvider>
    </SafeAreaProvider>
  );
};

export default App;
