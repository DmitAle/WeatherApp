import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { ApolloProvider } from '@shared/providers/ApolloProvider';
import { MainPage } from '@pages/MainPage';

const App = () => {
  return (
    <Provider store={store}>
      <ApolloProvider>
        <MainPage />
      </ApolloProvider>
    </Provider>
  );
};

export default App;
