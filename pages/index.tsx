import { useLazyQuery } from '@apollo/client';
import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Input,
  Stack,
  useToast,
} from '@chakra-ui/react';
import CharacterList from 'components/CharacterList';
import {
  GetCharacters,
  GetCharacters_characters_results,
} from 'generated/GetCharacters';
import {
  GetCharactersBySearch,
  GetCharactersBySearchVariables,
} from 'generated/GetCharactersBySearch';
import { initializeApollo } from 'lib/apollo';
import {
  GET_CHARACTERS,
  GET_CHARACTERS_BY_SEARCH,
} from 'lib/queries/characters';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

type Props = {
  initialCharacterList: (GetCharacters_characters_results | null)[] | null;
};

type FormValues = {
  name: string;
};

const ERROR_TOAST_ID = 'ERROR_TOAST_ID';

function Home({ initialCharacterList }: Props) {
  const [characterList, setCharacterList] = useState(initialCharacterList);

  const toast = useToast();

  const { handleSubmit, register, setValue, watch } = useForm<FormValues>({
    defaultValues: { name: '' },
  });

  const [getCharactersBySearch, { data, error, loading }] = useLazyQuery<
    GetCharactersBySearch,
    GetCharactersBySearchVariables
  >(GET_CHARACTERS_BY_SEARCH);

  useEffect(() => {
    if (error && !toast.isActive(ERROR_TOAST_ID)) {
      toast({
        id: ERROR_TOAST_ID,
        description: error.message,
        duration: 2000,
        isClosable: true,
        position: 'bottom',
        status: 'error',
        title: 'An Error Occurred.',
      });

      return;
    }

    if (data && !loading) {
      const _characterList = data.characters?.results ?? null;

      setCharacterList(_characterList);
    }
  }, [data, error, loading, toast]);

  const handleFormSubmit = ({ name }: FormValues) => {
    getCharactersBySearch({ variables: { name } });
  };

  const handleFormReset = () => {
    setCharacterList(initialCharacterList);

    setValue('name', '');
  };

  return (
    <>
      <Head>
        <title>NextJS - Apollo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex direction="column" justify="center" align="center">
        <Box
          mb={4}
          flexDirection="column"
          align="center"
          justify="center"
          py={8}
        >
          <Heading as="h1" size="2xl" mb={8}>
            Rick and Morty
          </Heading>

          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <Stack maxWidth="350px" width="100%" isInline mb={8}>
              <Input
                autoComplete="off"
                placeholder="Search for Characters"
                {...register('name')}
              />

              <IconButton
                aria-label="Search Database"
                colorScheme="blue"
                disabled={watch('name').trim() === ''}
                icon={<SearchIcon />}
                type="submit"
              />

              <IconButton
                aria-label="Reset"
                colorScheme="red"
                icon={<CloseIcon />}
                onClick={handleFormReset}
              />
            </Stack>
          </form>

          <CharacterList characters={characterList} />
        </Box>
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const apolloClient = initializeApollo();

    const { data } = await apolloClient.query<GetCharacters>({
      query: GET_CHARACTERS,
    });

    const initialApolloState = apolloClient.cache.extract();

    return {
      props: {
        initialApolloState,
        initialCharacterList: data.characters?.results,
      },
    };
  } catch {
    return {
      props: {
        initialCharacterList: [],
      },
    };
  }
};

export default Home;
