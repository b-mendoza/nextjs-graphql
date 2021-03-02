import { SearchIcon, CloseIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Input,
  Stack,
  useToast
} from '@chakra-ui/react'

import { GetStaticProps } from 'next'
import Head from 'next/head'

import { GET_PAGINATED_CHARACTERS } from 'lib/queries/characters'
import { initializeApollo } from 'lib/apollo'

import { GetCharactersBySearch_characters_results } from 'types/GetCharactersBySearch'
import {
  GetPaginatedCharacters,
  GetPaginatedCharacters_characters_results
} from 'types/GetPaginatedCharacters'

import CharacterList from 'components/CharacterList'

type Props = {
  characters: GetPaginatedCharacters_characters_results[]
}

function Home(results: Props) {
  const intialState = results

  const [search, setSearch] = useState('')

  const [characters, setCharacters] = useState(intialState.characters)

  const toast = useToast()

  const handleIconClick = async () => {
    setSearch('')

    setCharacters(intialState.characters)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const results = await fetch('/api/search-characters', {
      method: 'POST',
      body: search
    })

    const { characters, error } = (await results.json()) as {
      characters:
        | (GetCharactersBySearch_characters_results | null)[]
        | null
        | undefined
      error: string | null
    }

    if (error || !characters) {
      toast({
        description: error,
        duration: 5000,
        isClosable: true,
        position: 'bottom',
        status: 'error',
        title: 'An Error Occurred.'
      })
    } else {
      setCharacters(characters as GetCharactersBySearch_characters_results[])
    }
  }

  return (
    <Flex direction="column" justify="center" align="center">
      <Head>
        <title>NextJS - Apollo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box mb={4} flexDirection="column" align="center" justify="center" py={8}>
        <Heading as="h1" size="2xl" mb={8}>
          Rick and Morty
        </Heading>

        <form onSubmit={handleSubmit}>
          <Stack maxWidth="350px" width="100%" isInline mb={8}>
            <Input
              placeholder="Search"
              value={search}
              border="none"
              onChange={event => setSearch(event.target.value)}
            />

            <IconButton
              colorScheme="blue"
              aria-label="Search database"
              icon={<SearchIcon />}
              disabled={search === ''}
              type="submit"
            />

            <IconButton
              colorScheme="red"
              aria-label="Reset "
              icon={<CloseIcon />}
              disabled={search === ''}
              onClick={handleIconClick}
            />
          </Stack>
        </form>

        <CharacterList characters={characters} />
      </Box>
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<GetPaginatedCharacters>({
    query: GET_PAGINATED_CHARACTERS
  })

  return {
    props: {
      characters: data.characters?.results
    }
  }
}

export default Home
