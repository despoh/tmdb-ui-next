import { request } from "graphql-request";
import { searchQuery } from "@/graphql/queries";
import { SearchQuery } from "@/__generated__/graphql";
import { getApiBaseUrl } from "@/utils/general";

export const searchMovie = async (keyword: string, pageNumber: number) => {
  const variable = {
    type: "movie",
    keyword,
    pageNumber,
  };

  const data = await request<SearchQuery>(
    getApiBaseUrl(),
    searchQuery,
    variable,
  );
  return data.search;
};

export const searchTV = async (keyword: string, pageNumber: number) => {
  const variable = {
    type: "tv",
    keyword,
    pageNumber,
  };

  const data = await request<SearchQuery>(
    getApiBaseUrl(),
    searchQuery,
    variable,
  );
  return data.search;
};
