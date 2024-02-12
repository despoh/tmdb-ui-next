import { MovieDetailQuery, TvDetailQuery } from "@/__generated__/graphql";
import { movieDetailQuery, tvDetailQuery } from "@/graphql/queries";
import { getApiBaseUrl } from "@/utils/general";
import { request } from "graphql-request";

export const getMovieDetail = async (id: number) => {
  const variable = {
    id,
  };

  const data = await request<MovieDetailQuery>(
    getApiBaseUrl(),
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
    getApiBaseUrl(),
    tvDetailQuery,
    variable,
  );
  return data.tvDetail;
};
