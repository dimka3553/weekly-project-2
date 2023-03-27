"use client";
import { gql } from "graphql-request";
import { client } from "@/lib/client";

type RemoveFromListProps = {
  movieId: string;
  listId: string;
  setHidden: (hidden: boolean) => void;
};

async function removeMovieFromList(listId: string, movieId: string) {
  const REMOVE_MOVIE_FROM_LIST = gql`
    mutation RemoveMovie($removeMovieId: Int!, $listId: Int!) {
      removeMovie(id: $removeMovieId, listId: $listId)
    }
  `;
  try {
    const { removeMovie } = await client.request<{
      removeMovie: { id: string };
    }>(REMOVE_MOVIE_FROM_LIST, {
      removeMovieId: parseInt(movieId),
      listId: parseInt(listId),
    });
  } catch (e) {
    console.log(e);
  }
}

export default function RemoveFromList({
  movieId,
  listId,
  setHidden,
}: RemoveFromListProps) {
  return (
    <button
      className="h-10 bg-red-500 flex items-center justify-center w-full text-white"
      onClick={() => {
        removeMovieFromList(listId, movieId);
        setHidden(true);
      }}
    >
      Remove from list
    </button>
  );
}
