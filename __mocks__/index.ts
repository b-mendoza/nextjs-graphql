import { GetCharacters } from 'generated/GetCharacters';

export const mockedCharacters: GetCharacters = {
  characters: {
    __typename: 'Characters',
    results: [
      {
        __typename: 'Character',
        id: '1',
        name: 'Rick Sanchez',
        location: {
          __typename: 'Location',
          id: '20',
          name: 'Earth (Replacement Dimension)',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        origin: {
          __typename: 'Location',
          id: '1',
          name: 'Earth (C-137)',
        },
      },
      {
        __typename: 'Character',
        id: '2',
        name: 'Morty Smith',
        location: {
          __typename: 'Location',
          id: '20',
          name: 'Earth (Replacement Dimension)',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
        origin: {
          __typename: 'Location',
          id: '1',
          name: 'Earth (C-137)',
        },
      },
    ],
  },
};
