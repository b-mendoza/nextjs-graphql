import { NextApiRequest, NextApiResponse } from 'next'

import { initializeApollo } from 'lib/apollo'
import { SEARCH_CHARACTERS } from 'lib/queries/characters'

import {
  SearchCharacters_Results,
  SearchCharacters,
  SearchCharactersVariables
} from 'types/SearchCharacters'

const apolloClient = initializeApollo()

type Data = {
  characters: (SearchCharacters_Results | null)[] | null | undefined
  error: string | null
}

export default async function (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const search = req.body as string

  try {
    const { data } = await apolloClient.query<
      SearchCharacters,
      SearchCharactersVariables
    >({
      query: SEARCH_CHARACTERS,
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
