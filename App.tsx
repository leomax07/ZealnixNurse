import React, { useEffect } from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppLayout from './src/navigation/AppLayout';
import AppProvider from './src/navigation/AppProvider';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <AppProvider>
        <AppLayout />
      </AppProvider>
    </SafeAreaProvider>
  );
};

export default App;
