"use client";
import Image from "next/image";
import Link from "next/link";
import RemoveFromList from "../RemoveFromList";
import { useState } from "react";

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

interface MovieCardProps {
  movie: MovieListItem;
  listId: string;
}

export default function MovieCard({ movie, listId }: MovieCardProps) {
  const [hidden, setHidden] = useState(false);

  if (hidden) return null;
  return (
    <div className="max-h-[150px] hover:max-h-[190px] overflow-hidden rounded-md  hover:scale-110 active:scale-95 cursor-pointer transition-[0.2s] relative">
      <Link href={`movie/${movie.imdb_id}`}>
        <div className="bg-white max-h-[150px] overflow-hidden relative  ">
          <Image
            src={movie.movie.Poster}
            width={300}
            height={300}
            alt={movie.movie.Title}
            className="h-[150px] w-full object-cover"
          />
          <div className="absolute top-0 p-5 w-full h-full hover:bg-[#00000088] transition-[0.2s] hover:text-white text-transparent">
            <h1 className="text-lg font-bold">{movie.movie.Title}</h1>
            <p>Rating: {movie.movie.imdbRating} / 10</p>
            <p>{movie.movie.Year}</p>
          </div>
        </div>
      </Link>
      <div>
        <RemoveFromList
          listId={listId}
          movieId={movie.id}
          setHidden={setHidden}
        />
      </div>
    </div>
  );
}
