/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCharactersBySearch
// ====================================================

export interface GetCharactersBySearch_characters_info {
  __typename: "Info";
  /**
   * The length of the response.
   */
  count: number | null;
}

export interface GetCharactersBySearch_characters_results_location {
  __typename: "Location";
  /**
   * The name of the location.
   */
  name: string | null;
  /**
   * The id of the location.
   */
  id: string | null;
}

export interface GetCharactersBySearch_characters_results_origin {
  __typename: "Location";
  /**
   * The name of the location.
   */
  name: string | null;
  /**
   * The id of the location.
   */
  id: string | null;
}

export interface GetCharactersBySearch_characters_results_episode {
  __typename: "Episode";
  /**
   * The id of the episode.
   */
  id: string | null;
  /**
   * The code of the episode.
   */
  episode: string | null;
  /**
   * The air date of the episode.
   */
  air_date: string | null;
}

export interface GetCharactersBySearch_characters_results {
  __typename: "Character";
  /**
   * The name of the character.
   */
  name: string | null;
  /**
   * The id of the character.
   */
  id: string | null;
  /**
   * The character's last known location
   */
  location: GetCharactersBySearch_characters_results_location | null;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image: string | null;
  /**
   * The character's origin location
   */
  origin: GetCharactersBySearch_characters_results_origin | null;
  /**
   * Episodes in which this character appeared.
   */
  episode: (GetCharactersBySearch_characters_results_episode | null)[] | null;
}

export interface GetCharactersBySearch_characters {
  __typename: "Characters";
  info: GetCharactersBySearch_characters_info | null;
  results: (GetCharactersBySearch_characters_results | null)[] | null;
}

export interface GetCharactersBySearch {
  /**
   * Get the list of all characters
   */
  characters: GetCharactersBySearch_characters | null;
}

export interface GetCharactersBySearchVariables {
  search: string;
}
