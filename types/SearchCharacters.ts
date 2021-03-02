/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchCharacters
// ====================================================

export interface SearchCharacters_Info {
  __typename: 'Info'
  /**
   * The length of the response.
   */
  count: number | null
}

export interface SearchCharacters_Location {
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

export interface SearchCharacters_Origin {
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

export interface SearchCharacters_Episode {
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

export interface SearchCharacters_Results {
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
  location: SearchCharacters_Location | null
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image: string | null
  /**
   * The character's origin location
   */
  origin: SearchCharacters_Origin | null
  /**
   * Episodes in which this character appeared.
   */
  episode: (SearchCharacters_Episode | null)[] | null
}

export interface SearchCharacters_Characters {
  __typename: 'Characters'
  info: SearchCharacters_Info | null
  results: (SearchCharacters_Results | null)[] | null
}

export interface SearchCharacters {
  /**
   * Get the list of all characters
   */
  characters: SearchCharacters_Characters | null
}

export interface SearchCharactersVariables {
  search: string
}
