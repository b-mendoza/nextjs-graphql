import { gql } from '@apollo/client'

export const CHARACTERS_QUERY = gql`
  query CharactersQuery {
    characters(page: 1) {
      info {
        count
        pages
      }
      results {
        name
        id
        location {
          name
          id
        }
        image
        origin {
          name
          id
        }
        episode {
          id
          episode
          air_date
        }
      }
    }
  }
`

export const SEARCH_CHARACTERS = gql`
  query SearchCharacters($search: String!) {
    characters(filter: { name: $search }) {
      info {
        count
      }
      results {
        name
        id
        location {
          name
          id
        }
        image
        origin {
          name
          id
        }
        episode {
          id
          episode
          air_date
        }
      }
    }
  }
`
