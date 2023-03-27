"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";
import { gql } from "graphql-request";
import { client } from "@/lib/client";

const GET_MOVIE_LISTS = gql`
  query GetMovieLists($email: String!) {
    getMovieLists(email: $email) {
      name
      id
    }
  }
`;

type MovieList = {
  name: string;
  id: string;
};

async function getMovieLists(email: string) {
  const { getMovieLists } = await client.request<{
    getMovieLists: MovieList[];
  }>(GET_MOVIE_LISTS, {
    email: email,
  });

  return getMovieLists;
}

type NewListProps = {
  children: React.ReactNode;
  movieId: string;
};

export default function DeleteFromList({ children, movieId }: NewListProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [movieLists, setMovieLists] = useState<MovieList[]>([]);
  const [error, setError] = useState("");

  async function removeMovieFromList(listId: string, movieId: string) {
    const REMOVE_MOVIE_FROM_LIST = gql`
      mutation RemoveMovie($removeMovieId: Int!, $listId: Int!) {
        removeMovie(id: $removeMovieId, listId: $listId) {
          id
        }
      }
    `;

    try {
      const { removeMovie } = await client.request<{
        removeMovie: { id: string };
      }>(REMOVE_MOVIE_FROM_LIST, {
        removeMovieId: parseInt(movieId),
        listId: parseInt(listId),
      });
      router.push(`/my-lists/${listId}`);
    } catch (e) {
      console.log(e);
      setError("Something went wrong");
    }
  }
  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setEmail(email);
      const movieLists = getMovieLists(email).then((data) => {
        setMovieLists(data);
      });
    }
  }, []);

  return (
    <>
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Trigger className="text-primary">
          <div>{children}</div>
        </Dialog.Trigger>
        <Dialog.Overlay className={styles.DialogOverlay}>
          <Dialog.Content className={styles.DialogContent}>
            <div className="px-5 pb-5">
              <div className="flex items-center h-[60px] justify-between">
                <Dialog.Title className="text-xl font-bold text-black">
                  Add To List
                </Dialog.Title>
                <Dialog.Close className="flex items-center justify-center h-10 w-10 rounded-full text-gray-500 text-2xl hover:bg-slate-100 hover:ring-2 text-center align-middle transition-[0.15s] hover:scale-105 active:scale-95">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    fill="none"
                    viewBox="0 0 17 16"
                  >
                    <rect
                      width="20"
                      height="2"
                      x="2.025"
                      y="0.222"
                      fill="#666"
                      rx="1"
                      transform="rotate(45 2.025 .222)"
                    ></rect>
                    <rect
                      width="20"
                      height="2"
                      x="0.833"
                      y="14.586"
                      fill="#666"
                      rx="1"
                      transform="rotate(-45 .833 14.586)"
                    ></rect>
                  </svg>
                </Dialog.Close>
              </div>

              <Dialog.Description className="mb-4 text-gray-500">
                Please select a list to add this movie to.
              </Dialog.Description>

              {error && (
                <div className="text-red-500 text-sm mb-2">{error}</div>
              )}

              {
                // if the user is logged in, show the list of movie lists
                email && (
                  <div>
                    {movieLists.map((movieList) => (
                      <div
                        key={movieList.id}
                        className="flex items-center justify-between mb-2 gap-5"
                      >
                        <p className="text-black truncate">{movieList.name}</p>
                        <button
                          className="bg-red-500 text-white px-5 py-2 rounded-md hover:scale-[1.02] active:scale-[0.98] transition-[0.15s]"
                          onClick={() => {
                            removeMovieFromList(movieList.id, movieId);
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )
              }
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Root>
    </>
  );
}
