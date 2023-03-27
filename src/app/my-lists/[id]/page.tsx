import { gql } from "graphql-request";
import { client } from "@/lib/client";
import Avatar from "@/components/Avatar";
import MovieCard from "@/components/MovieCardX";
import Ohno from "@/components/Ohno";
import DeleteList from "@/components/DeleteList";
type MovieListItem = {
  id: string;
  imdb_id: string;
  movie: {
    Title: string;
    Year: string;
    imdbID: string;
    imdbRating: string;
    Poster: string;
  };
};
type MovieList = {
  name: string;
  id: string;
  items?: MovieListItem[];
};
const fetchList = async (id: string) => {
  const GET_MOVIE_LIST = gql`
    query GetMovieList($getMovieListId: Int!) {
      getMovieList(id: $getMovieListId) {
        id
        name
      }
    }
  `;

  const GET_MOVIE_LIST_ITEMS = gql`
    query GetMovieList($listId: Int!) {
      getMovieListItems(listId: $listId) {
        id
        imdb_id
        movie {
          Title
          Year
          imdbID
          imdbRating
          Poster
        }
      }
    }
  `;

  const getMovieListItems = client.request<{
    getMovieListItems: Promise<MovieListItem[]>;
  }>(GET_MOVIE_LIST_ITEMS, {
    listId: parseInt(id),
  });

  const getMovieList = client.request<{
    getMovieList: Promise<MovieList>;
  }>(GET_MOVIE_LIST, {
    getMovieListId: parseInt(id),
  });

  //use promise.all

  const [resMovieListItems, resMovieList] = await Promise.all([
    getMovieListItems,
    getMovieList,
  ]);

  (await resMovieList.getMovieList).items =
    await resMovieListItems.getMovieListItems;

  return resMovieList.getMovieList;
};

export default async function MovieListPage({
  params,
}: {
  params: { id: string };
}) {
  const movieList = await fetchList(params.id);

  return (
    <div>
      <div className="w-full h-[200px] rounded-md bg-red-500 mb-10 flex overflow-hidden relative items-center justify-center text-white text-3xl font-bold">
        <div className="absolute">
          <Avatar account={movieList.name} size={1500} />
        </div>
        <div className="absolute z-10">{movieList.name}</div>
      </div>
      <div className="grid grid-cols-1 min-[800px]:grid-cols-3 min-[400px]:grid-cols-2 gap-5 w-full min-[1000px]:grid-cols-4 mx-auto max-w-[1200px]">
        {movieList.items?.map((item) => (
          <MovieCard key={item.id} movie={item} listId={params.id} />
        ))}
      </div>
      {movieList.items?.length === 0 ? (
        <div className="flex flex-col items-center gap-5">
          <Ohno message="This list is empty!" />
          Try adding some movies to it.
          <DeleteList id={parseInt(params.id)} />
        </div>
      ) : (
        <DeleteList id={parseInt(params.id)} />
      )}
    </div>
  );
}
