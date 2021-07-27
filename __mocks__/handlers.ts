import { graphql } from 'msw';

import { GetCharacters } from 'generated/GetCharacters';

import { mockedCharacters } from '__mocks__';

export const handlers = [
  graphql.query<GetCharacters>('GetCharacters', (_, res, context) =>
    res(context.data(mockedCharacters)),
  ),
];
