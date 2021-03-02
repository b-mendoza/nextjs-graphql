import { NextApiRequest, NextApiResponse } from 'next'

import { initializeApollo } from 'lib/apollo'
import { GET_CHARACTERS_BY_SEARCH } from 'lib/queries/characters'

import {
  GetCharactersBySearch_characters_results,
  GetCharactersBySearch,
  GetCharactersBySearchVariables
} from 'types/GetCharactersBySearch'

const apolloClient = initializeApollo()

type Data = {
  characters:
    | (GetCharactersBySearch_characters_results | null)[]
    | null
    | undefined
  error: string | null
}

export default async function (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const search = req.body as string

  try {
    const { data } = await apolloClient.query<
      GetCharactersBySearch,
      GetCharactersBySearchVariables
    >({
      query: GET_CHARACTERS_BY_SEARCH,
      variables: { search }
    })

    res.status(200).json({ characters: data.characters?.results, error: null })
  } catch (error: unknown) {
    const errorData = error as Error

    if (errorData.message === '404: Not Found') {
      res.status(404).json({ characters: null, error: 'No Characters Found' })
    } else {
      res
        .status(500)
        .json({ characters: null, error: 'Internal Error, Please Try Again' })
    }
  }
}
