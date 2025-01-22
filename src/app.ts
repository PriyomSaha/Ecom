import * as React from 'react';
import * as ReactNativeScript from 'react-nativescript';
import { AppNavigator } from './navigation/AppNavigator';
import { AuthProvider } from './hooks/useAuth';

Object.defineProperty(global, '__DEV__', { value: false });

function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}

ReactNativeScript.start(React.createElement(App, {}, null));