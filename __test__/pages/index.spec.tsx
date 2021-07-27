/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { screen, waitFor } from '@testing-library/react';
import { getPage } from 'next-page-tester';
import { mockedCharacters } from '__mocks__';

describe('Tests to Homepage', () => {
  it('should render the Homepage', async () => {
    const { render } = await getPage({ route: '/' });

    render();

    await waitFor(() => {
      mockedCharacters.characters?.results?.forEach(character => {
        const characterName = character!.name as string;

        expect(screen.getByRole('heading', { level: 4, name: characterName }));
      });
    });
  });
});
