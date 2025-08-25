import { useNuxtApp } from '#imports'

export function useApollo() {
  const { $apollo, $gql } = useNuxtApp() as unknown as { $apollo: any; $gql: any }
  return { apollo: $apollo, gql: $gql }
}
