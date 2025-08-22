import { ApolloClient, InMemoryCache, gql } from '@apollo/client/core'

export default defineNuxtPlugin((nuxtApp) => {
  const apolloClient = new ApolloClient({
    uri: 'http://localhost:8000/graphql',
    cache: new InMemoryCache(),
  })

  nuxtApp.provide('apollo', apolloClient)
  nuxtApp.provide('gql', gql)
})
