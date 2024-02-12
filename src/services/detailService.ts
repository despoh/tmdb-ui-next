import { MovieDetailQuery, TvDetailQuery } from "@/__generated__/graphql";
import { movieDetailQuery, tvDetailQuery } from "@/graphql/queries";
import { request } from "graphql-request";

export const getMovieDetail = async (id: number) => {
  const variable = {
    id,
  };

  const data = await request<MovieDetailQuery>(
    "http://tmdb.despoh.com/api",
    movieDetailQuery,
    variable,
  );
  return data.movieDetail;
};

export const getTvDetail = async (id: number) => {
  const variable = {
    id,
  };

  const data = await request<TvDetailQuery>(
    "http://tmdb.despoh.com/api",
    tvDetailQuery,
    variable,
  );
  return data.tvDetail;
};
