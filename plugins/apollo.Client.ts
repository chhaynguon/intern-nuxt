// plugins/apollo.client.ts
import { ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client/core'

export default defineNuxtPlugin((nuxtApp) => {
  const apolloClient = new ApolloClient({
    link: new HttpLink({
      uri: 'http://localhost:8000/graphql',
    }),
    cache: new InMemoryCache(),
  })

  nuxtApp.provide('apollo', apolloClient)
  nuxtApp.provide('gql', gql)
})
