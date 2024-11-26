import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: process.env.YANDEX_WEATHER_API_URL,
    headers: {
      'X-Yandex-Weather-Key': process.env.YANDEX_WETHER_TOKEN || '',
    },
  }),
  cache: new InMemoryCache(),
});
