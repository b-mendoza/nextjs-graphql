import { Heading, Text } from '@chakra-ui/react';
import { GetCharacters_characters_results } from 'generated/GetCharacters';
import Image from 'next/image';

type Props = Pick<
  GetCharacters_characters_results,
  'image' | 'location' | 'name' | 'origin'
>;

function Character({ image, location, name, origin }: Props) {
  return (
    <div>
      <Image
        alt={name || undefined}
        height={300}
        src={
          image ||
          'https://olafdeboer.nl/wp-content/themes/koji/assets/images/default-fallback-image.png'
        }
        title={name || undefined}
        width={300}
      />

      <Heading as="h4" alignItems="center" size="md">
        {name}
      </Heading>

      <Text align="center">Origin: {origin?.name}</Text>
      <Text align="center">Location: {location?.name}</Text>
    </div>
  );
}

export default Character;
