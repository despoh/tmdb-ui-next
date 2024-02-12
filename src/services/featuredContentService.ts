import { PopularMediaQuery, TrendingMediaQuery } from "@/__generated__/graphql";
import { popularMediaQuery, trendingMediaQuery } from "@/graphql/queries";
import { getApiBaseUrl } from "@/utils/general";
import { request } from "graphql-request";

export const getTrendingMedia = async (timeWindow: String) => {
  const variable = {
    timeWindow: timeWindow,
  };

  const data = await request<TrendingMediaQuery>(
    getApiBaseUrl(),
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
    getApiBaseUrl(),
    popularMediaQuery,
    variable,
  );
  return data.popularMedia;
};
