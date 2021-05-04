import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        location {
          id
          name
        }
        image
        origin {
          id
          name
        }
      }
    }
  }
`;

export const GET_CHARACTERS_BY_SEARCH = gql`
  query GetCharactersBySearch($name: String!) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        location {
          id
          name
        }
        image
        origin {
          id
          name
        }
      }
    }
  }
`;
