import { ApolloProvider, NormalizedCacheObject } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import { useApollo } from 'lib/apollo';

type PageProps = {
  initialApolloState?: NormalizedCacheObject;
};

function __App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo((pageProps as PageProps).initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default __App;
