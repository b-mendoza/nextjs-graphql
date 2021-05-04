import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({ uri: process.env.NEXT_PUBLIC_BASE_URL }),
    cache: new InMemoryCache(),
  });
}
