import { ApolloProvider as ApolloClientProvider } from '@apollo/client';
import { PropsWithChildren } from 'react';

import { apolloClient } from '@shared/api';

interface Props {}

export const ApolloProvider = (props: PropsWithChildren<Props>) => {
  const { children } = props;

  return <ApolloClientProvider client={apolloClient}>{children}</ApolloClientProvider>;
};
