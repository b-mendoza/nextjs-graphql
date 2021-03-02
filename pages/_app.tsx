import { ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { useApollo } from 'lib/apollo'

import 'styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default App
