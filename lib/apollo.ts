import { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import { useMemo } from 'react'

import { createApolloClient } from 'lib/apolloClient'

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null

export function initializeApollo(
  initialState: NormalizedCacheObject | null = null
) {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Restore the cache using the data passed from
    // getStaticProps / getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState })
  }

  if (typeof window !== 'undefined' && !apolloClient) {
    apolloClient = _apolloClient
  }

  return _apolloClient
}

export function useApollo(initialState: NormalizedCacheObject | null) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])

  return store
}
