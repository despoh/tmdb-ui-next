import SearchPage from "@/components/SearchPage/SeachPage";
import { searchMovie, searchTV } from "@/services/searchService";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";

const Search = ({
  tvData,
  movieData,
  searchKeyword,
  pageNumber,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (!tvData || !movieData) {
    return <div>No data Found</div>;
  }

  return (
    <SearchPage
      searchKeyword={searchKeyword}
      movieData={movieData}
      tvData={tvData}
      pageNumber={pageNumber}
    />
  );
};

export default Search;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const searchKeyword = context.query.query as string;
  const pageNumber = Number(context.query?.page ?? 1);

  if (searchKeyword) {
    const movieData = await searchMovie(searchKeyword, pageNumber);
    const tvData = await searchTV(searchKeyword, pageNumber);

    return {
      props: {
        tvData,
        movieData,
        searchKeyword,
        pageNumber,
      },
    };
  }

  return {
    props: {
      data: null,
    },
  };
}
