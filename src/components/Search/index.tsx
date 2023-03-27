"use client";
import styles from "./styles.module.css";
import * as Dialog from "@radix-ui/react-dialog";

import { useEffect, useState } from "react";
import SearchResult from "../SearchResult";
import { gql } from "graphql-request";
import { client } from "@/lib/client";
export type MovieType = {
  actors: string[];
  desc: string;
  directors: string[];
  genre: string[];
  image_url: string;
  thumb_url: string;
  imdb_url: string;
  name: string;
  rating: number;
  year: number;
};

const fetchMovies = async (title: string) => {
  try {
    const GET_MOVIES = gql`
      query SearchMovieByTitle($title: String!) {
        searchMovieByTitle(title: $title) {
          Poster
          Title
          Type
          Year
          imdbID
        }
      }
    `;
    const { searchMovieByTitle } = await client.request<{
      searchMovieByTitle: {
        Poster: string;
        Title: string;
        Type: string;
        Year: string;
        imdbID: string;
      }[];
    }>(GET_MOVIES, {
      title: title,
    });

    const movies = searchMovieByTitle.map((movie) => {
      return {
        actors: [],
        desc: "",
        directors: [],
        genre: [],
        image_url: movie.Poster,
        thumb_url: movie.Poster,
        imdb_url: `/title/${movie.imdbID}`,
        name: movie.Title,
        rating: 0,
        year: parseInt(movie.Year),
      };
    });

    return movies;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export default function Search() {
  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchQuery(value);
    const movies = await fetchMovies(value);
    setMovies(movies);
  };

  const [movies, setMovies] = useState<MovieType[]>([]);
  const [allMovies, setAllMovies] = useState<MovieType[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>Search</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay}>
          <Dialog.Content className={styles.DialogContent}>
            <input
              type="text"
              placeholder="Search"
              onChange={handleSearch}
              value={searchQuery}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />

            <div className="bg-white rounded-md flex flex-col">
              {movies.map((movie, i) => (
                <SearchResult movie={movie} setOpen={setOpen} key={i} />
              ))}
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
