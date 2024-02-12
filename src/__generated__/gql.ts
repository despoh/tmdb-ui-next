/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query trendingMedia($timeWindow: String) {\n    trendingMedia(timeWindow: $timeWindow) {\n      ... on Movie {\n        __typename\n        id\n        title\n        posterPath\n        releaseDate\n        voteAverage\n      }\n\n      ... on TV {\n        __typename\n        id\n        title\n        posterPath\n        releaseDate\n        voteAverage\n      }\n    }\n  }\n": types.TrendingMediaDocument,
    "\n  query popularMedia($type: String) {\n    popularMedia(type: $type) {\n      ... on Movie {\n        __typename\n        id\n        title\n        posterPath\n        releaseDate\n        voteAverage\n      }\n\n      ... on TV {\n        __typename\n        id\n        title\n        posterPath\n        releaseDate\n        voteAverage\n      }\n    }\n  }\n": types.PopularMediaDocument,
    "\n  query movieDetail($id: Int) {\n    movieDetail(id: $id) {\n      __typename\n      id\n      title\n      overview\n      posterPath\n      backdropPath\n      releaseDate\n      tagline\n      genres\n      status\n      originalLanguage\n      revenue\n      budget\n      directors\n      duration\n      keywords\n      voteAverage\n      casts {\n        name\n        profile_path\n        character\n      }\n    }\n  }\n": types.MovieDetailDocument,
    "\n  query tvDetail($id: Int) {\n    tvDetail(id: $id) {\n      __typename\n      id\n      title\n      overview\n      posterPath\n      backdropPath\n      releaseDate\n      tagline\n      genres\n      status\n      originalLanguage\n      creator\n      keywords\n      voteAverage\n      keywords\n      networkLogos\n      type\n      casts {\n        name\n        profile_path\n        character\n      }\n    }\n  }\n": types.TvDetailDocument,
    "\n  query search($keyword: String, $type: String, $pageNumber: Int) {\n    search(keyword: $keyword, type: $type, pageNumber: $pageNumber) {\n      page\n      totalPages\n      totalResults\n      data {\n        ... on Movie {\n          __typename\n          id\n          title\n          overview\n          releaseDate\n          posterPath\n        }\n\n        ... on TV {\n          __typename\n          id\n          title\n          overview\n          releaseDate\n          posterPath\n        }\n      }\n    }\n  }\n": types.SearchDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query trendingMedia($timeWindow: String) {\n    trendingMedia(timeWindow: $timeWindow) {\n      ... on Movie {\n        __typename\n        id\n        title\n        posterPath\n        releaseDate\n        voteAverage\n      }\n\n      ... on TV {\n        __typename\n        id\n        title\n        posterPath\n        releaseDate\n        voteAverage\n      }\n    }\n  }\n"): (typeof documents)["\n  query trendingMedia($timeWindow: String) {\n    trendingMedia(timeWindow: $timeWindow) {\n      ... on Movie {\n        __typename\n        id\n        title\n        posterPath\n        releaseDate\n        voteAverage\n      }\n\n      ... on TV {\n        __typename\n        id\n        title\n        posterPath\n        releaseDate\n        voteAverage\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query popularMedia($type: String) {\n    popularMedia(type: $type) {\n      ... on Movie {\n        __typename\n        id\n        title\n        posterPath\n        releaseDate\n        voteAverage\n      }\n\n      ... on TV {\n        __typename\n        id\n        title\n        posterPath\n        releaseDate\n        voteAverage\n      }\n    }\n  }\n"): (typeof documents)["\n  query popularMedia($type: String) {\n    popularMedia(type: $type) {\n      ... on Movie {\n        __typename\n        id\n        title\n        posterPath\n        releaseDate\n        voteAverage\n      }\n\n      ... on TV {\n        __typename\n        id\n        title\n        posterPath\n        releaseDate\n        voteAverage\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query movieDetail($id: Int) {\n    movieDetail(id: $id) {\n      __typename\n      id\n      title\n      overview\n      posterPath\n      backdropPath\n      releaseDate\n      tagline\n      genres\n      status\n      originalLanguage\n      revenue\n      budget\n      directors\n      duration\n      keywords\n      voteAverage\n      casts {\n        name\n        profile_path\n        character\n      }\n    }\n  }\n"): (typeof documents)["\n  query movieDetail($id: Int) {\n    movieDetail(id: $id) {\n      __typename\n      id\n      title\n      overview\n      posterPath\n      backdropPath\n      releaseDate\n      tagline\n      genres\n      status\n      originalLanguage\n      revenue\n      budget\n      directors\n      duration\n      keywords\n      voteAverage\n      casts {\n        name\n        profile_path\n        character\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query tvDetail($id: Int) {\n    tvDetail(id: $id) {\n      __typename\n      id\n      title\n      overview\n      posterPath\n      backdropPath\n      releaseDate\n      tagline\n      genres\n      status\n      originalLanguage\n      creator\n      keywords\n      voteAverage\n      keywords\n      networkLogos\n      type\n      casts {\n        name\n        profile_path\n        character\n      }\n    }\n  }\n"): (typeof documents)["\n  query tvDetail($id: Int) {\n    tvDetail(id: $id) {\n      __typename\n      id\n      title\n      overview\n      posterPath\n      backdropPath\n      releaseDate\n      tagline\n      genres\n      status\n      originalLanguage\n      creator\n      keywords\n      voteAverage\n      keywords\n      networkLogos\n      type\n      casts {\n        name\n        profile_path\n        character\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query search($keyword: String, $type: String, $pageNumber: Int) {\n    search(keyword: $keyword, type: $type, pageNumber: $pageNumber) {\n      page\n      totalPages\n      totalResults\n      data {\n        ... on Movie {\n          __typename\n          id\n          title\n          overview\n          releaseDate\n          posterPath\n        }\n\n        ... on TV {\n          __typename\n          id\n          title\n          overview\n          releaseDate\n          posterPath\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query search($keyword: String, $type: String, $pageNumber: Int) {\n    search(keyword: $keyword, type: $type, pageNumber: $pageNumber) {\n      page\n      totalPages\n      totalResults\n      data {\n        ... on Movie {\n          __typename\n          id\n          title\n          overview\n          releaseDate\n          posterPath\n        }\n\n        ... on TV {\n          __typename\n          id\n          title\n          overview\n          releaseDate\n          posterPath\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;