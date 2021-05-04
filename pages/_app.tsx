import { ApolloProvider, NormalizedCacheObject } from '@apollo/client'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { useApollo } from 'lib/apollo'

import 'styles/globals.css'

type PageProps = {
  initialApolloState: NormalizedCacheObject | undefined
}

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo((pageProps as PageProps).initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default App
