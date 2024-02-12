import { request } from "graphql-request";
import { searchQuery } from "@/graphql/queries";
import { SearchQuery } from "@/__generated__/graphql";

export const searchMovie = async (keyword: string, pageNumber: number) => {
  const variable = {
    type: "movie",
    keyword,
    pageNumber,
  };

  const data = await request<SearchQuery>(
    "http://tmdb.despoh.com/api",
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
    "http://tmdb.despoh.com/api",
    searchQuery,
    variable,
  );
  return data.search;
};
