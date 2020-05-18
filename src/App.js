import React from 'react';
import { Provider } from 'react-redux';
import reduxStore from './store';
import { PersistGate } from 'redux-persist/integration/react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-navigation';
import Providers from './navigation';

export default App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={reduxStore.store}>
        <SafeAreaView forceInset={{ top: 'never', bottom: 'always' }} style={{ flex: 1, backgroundColor: '#fff' }} >
          <Providers />
        </SafeAreaView>
      </Provider>
    </SafeAreaProvider>
  )
}