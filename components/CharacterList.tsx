import { SimpleGrid } from '@chakra-ui/react';
import { GetCharactersBySearch_characters_results } from 'generated/GetCharactersBySearch';
import { memo } from 'react';

import Character from 'components/Character';

type Props = {
  characters: (GetCharactersBySearch_characters_results | null)[] | null;
};

function CharacterList({ characters }: Props) {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing="40px">
      {characters?.map(character => (
        <Character
          key={character?.id}
          image={character?.image || null}
          location={character?.location || null}
          name={character?.name || null}
          origin={character?.origin || null}
        />
      ))}
    </SimpleGrid>
  );
}

export default memo(CharacterList);
