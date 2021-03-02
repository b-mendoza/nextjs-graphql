import { Heading, Text, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image'

import { GetCharactersBySearch_characters_results } from 'types/GetCharactersBySearch'

type Props = {
  characters: GetCharactersBySearch_characters_results[]
}

function CharacterList({ characters }: Props) {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing="40px">
      {characters.map(character => {
        return (
          <div key={character.id}>
            <Image
              src={
                character.image ||
                'https://olafdeboer.nl/wp-content/themes/koji/assets/images/default-fallback-image.png'
              }
              width={300}
              height={300}
              alt={`${character.name}`}
            />

            <Heading as="h4" alignItems="center" size="md">
              {character.name}
            </Heading>

            <Text align="center">Origin: {character.origin?.name}</Text>
            <Text align="center">Location: {character.location?.name}</Text>
          </div>
        )
      })}
    </SimpleGrid>
  )
}

export default CharacterList
