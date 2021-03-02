import { gql } from '@apollo/client'

export const GET_PAGINATED_CHARACTERS = gql`
  query GetPaginatedCharacters {
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

export const GET_CHARACTERS_BY_SEARCH = gql`
  query GetCharactersBySearch($search: String!) {
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
