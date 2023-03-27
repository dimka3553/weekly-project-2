import Image from "next/image";
import { gql } from "graphql-request";
import { client } from "@/lib/client";
import AddToList from "@/components/AddToList";
import DeleteFromList from "@/components/DeleteFromList";

const fetchMovie = async (id: string) => {
  const GET_MOVIE = gql`
    query Query($searchMovieByIdId: String!) {
      searchMovieById(id: $searchMovieByIdId) {
        Title
        Actors
        Genre
        Year
        Plot
        Poster
        imdbRating
      }
    }
  `;

  const { searchMovieById } = await client.request<{
    searchMovieById: {
      Title: string;
      Actors: string;
      Genre: string;
      Year: string;
      Plot: string;
      Poster: string;
      imdbRating: string;
    };
  }>(GET_MOVIE, {
    searchMovieByIdId: id,
  });

  const getMovie = {
    name: searchMovieById.Title,
    actors: searchMovieById.Actors.split(", "),
    genre: searchMovieById.Genre.split(", "),
    year: searchMovieById.Year,
    desc: searchMovieById.Plot,
    image_url: searchMovieById.Poster,
    rating: searchMovieById.imdbRating,
  };

  return getMovie;
};

export default async function MoviePage({
  params,
}: {
  params: { id: string };
}) {
  const movie = await fetchMovie(params.id);
  return (
    <main className="max-w-[1200px] mx-auto px-5">
      <div className="flex gap-10 max-[800px]:flex-col">
        <div className="min-w-[400px] max-[500px]:min-w-full">
          <Image
            src={movie.image_url}
            width={600}
            height={600}
            alt={movie.name}
            className="max-[800px]:h-[300px] max-[800px]:w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-5">
          {" "}
          <h1 className="text-3xl font-bold">{movie.name}</h1>
          <span>
            🗓️ {movie.year} | ⭐️ {movie.rating} / 10
          </span>
          <div className="flex gap-5">
            {" "}
            {movie.genre.map((genre, i) => (
              <div className="px-2 py-1 bg-[#0066ff22] text-primary" key={i}>
                {genre}
              </div>
            ))}
          </div>
          <h2 className="font-bold text-lg">Summary</h2>
          <p>{movie.desc.replace(/&apos;/g, "'")}</p>
          <h2 className="font-bold text-lg">Actors</h2>
          <div className="flex gap-5">
            {movie.actors.map((actor, i) => (
              <div className="px-2 py-1 bg-[#ffa60022] text-[#ff9500]" key={i}>
                {actor}
              </div>
            ))}
          </div>
          <div className="flex gap-5">
            <AddToList movieId={params.id}>
              <div className="bg-primary text-white px-5 py-2 rounded-md hover:scale-[1.02] active:scale-[0.98] transition-[0.15s]">
                Add to list
              </div>
            </AddToList>
            <DeleteFromList movieId={params.id}>
              <div className="bg-red-500 text-white px-5 py-2 rounded-md hover:scale-[1.02] active:scale-[0.98] transition-[0.15s]">
                Remove from list
              </div>
            </DeleteFromList>
          </div>
        </div>
      </div>
    </main>
  );
}
