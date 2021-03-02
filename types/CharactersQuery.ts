/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CharactersQuery
// ====================================================

export interface CharactersQuery_Info {
  __typename: 'Info'
  /**
   * The length of the response.
   */
  count: number | null
  /**
   * The amount of pages.
   */
  pages: number | null
}

export interface CharactersQuery_Location {
  __typename: 'Location'
  /**
   * The name of the location.
   */
  name: string | null
  /**
   * The id of the location.
   */
  id: string | null
}

export interface CharactersQuery_Origin {
  __typename: 'Location'
  /**
   * The name of the location.
   */
  name: string | null
  /**
   * The id of the location.
   */
  id: string | null
}

export interface CharactersQuery_Episode {
  __typename: 'Episode'
  /**
   * The id of the episode.
   */
  id: string | null
  /**
   * The code of the episode.
   */
  episode: string | null
  /**
   * The air date of the episode.
   */
  air_date: string | null
}

export interface CharactersQuery_Results {
  __typename: 'Character'
  /**
   * The name of the character.
   */
  name: string | null
  /**
   * The id of the character.
   */
  id: string | null
  /**
   * The character's last known location
   */
  location: CharactersQuery_Location | null
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image: string | null
  /**
   * The character's origin location
   */
  origin: CharactersQuery_Origin | null
  /**
   * Episodes in which this character appeared.
   */
  episode: (CharactersQuery_Episode | null)[] | null
}

export interface CharactersQuery_Characters {
  __typename: 'Characters'
  info: CharactersQuery_Info | null
  results: (CharactersQuery_Results | null)[] | null
}

export interface CharactersQuery {
  /**
   * Get the list of all characters
   */
  characters: CharactersQuery_Characters | null
}
