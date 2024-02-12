import { PopularMediaQuery, TrendingMediaQuery } from "@/__generated__/graphql";
import { popularMediaQuery, trendingMediaQuery } from "@/graphql/queries";
import { request } from "graphql-request";

export const getTrendingMedia = async (timeWindow: String) => {
  const variable = {
    timeWindow: timeWindow,
  };

  const data = await request<TrendingMediaQuery>(
    "https://tmdb.despoh.com/api",
    trendingMediaQuery,
    variable,
  );
  return data.trendingMedia;
};

export const getPopularMedia = async (type: String) => {
  const variable = {
    type: type,
  };

  const data = await request<PopularMediaQuery>(
    "https://tmdb.despoh.com/api",
    popularMediaQuery,
    variable,
  );
  return data.popularMedia;
};
