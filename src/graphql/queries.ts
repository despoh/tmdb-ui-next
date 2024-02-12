import { gql } from "graphql-request";

export const trendingMediaQuery = gql`
  query trendingMedia($timeWindow: String) {
    trendingMedia(timeWindow: $timeWindow) {
      ... on Movie {
        __typename
        id
        title
        posterPath
        releaseDate
        voteAverage
      }

      ... on TV {
        __typename
        id
        title
        posterPath
        releaseDate
        voteAverage
      }
    }
  }
`;

export const popularMediaQuery = gql`
  query popularMedia($type: String) {
    popularMedia(type: $type) {
      ... on Movie {
        __typename
        id
        title
        posterPath
        releaseDate
        voteAverage
      }

      ... on TV {
        __typename
        id
        title
        posterPath
        releaseDate
        voteAverage
      }
    }
  }
`;

export const movieDetailQuery = gql`
  query movieDetail($id: Int) {
    movieDetail(id: $id) {
      __typename
      id
      title
      overview
      posterPath
      backdropPath
      releaseDate
      tagline
      genres
      status
      originalLanguage
      revenue
      budget
      directors
      duration
      keywords
      voteAverage
      casts {
        name
        profile_path
        character
      }
    }
  }
`;

export const tvDetailQuery = gql`
  query tvDetail($id: Int) {
    tvDetail(id: $id) {
      __typename
      id
      title
      overview
      posterPath
      backdropPath
      releaseDate
      tagline
      genres
      status
      originalLanguage
      creator
      keywords
      voteAverage
      keywords
      networkLogos
      type
      casts {
        name
        profile_path
        character
      }
    }
  }
`;

export const searchQuery = gql`
  query search($keyword: String, $type: String, $pageNumber: Int) {
    search(keyword: $keyword, type: $type, pageNumber: $pageNumber) {
      page
      totalPages
      totalResults
      data {
        ... on Movie {
          __typename
          id
          title
          overview
          releaseDate
          posterPath
        }

        ... on TV {
          __typename
          id
          title
          overview
          releaseDate
          posterPath
        }
      }
    }
  }
`;
