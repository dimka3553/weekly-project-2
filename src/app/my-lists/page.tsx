"use client";

import { gql } from "graphql-request";
import { client } from "@/lib/client";
import { useEffect, useState } from "react";
import Ohno from "@/components/Ohno";
import Login from "@/components/Login";
import MovieList from "@/components/MovieListCard";
import NewList from "@/components/NewList";

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

export default function MyListsPage() {
  const [email, setEmail] = useState("");

  const [lists, setLists] = useState<MovieList[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const semail = localStorage.getItem("email");
    if (semail) {
      setEmail(semail);
      getMovieLists(semail).then((data) => {
        setLists(data);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {lists.length > 0 && (
        <h1 className="text-3xl font-bold pt-5 pb-12">My Lists</h1>
      )}
      {lists.length > 0 ? (
        <div className="grid grid-cols-1 min-[800px]:grid-cols-3 min-[400px]:grid-cols-2 gap-5 w-full min-[1000px]:grid-cols-4 mx-auto max-w-[1200px]">
          {lists.map((list) => (
            <MovieList key={list.id} {...list} />
          ))}
        </div>
      ) : (
        <Ohno message="You don't have any lists yet!" />
      )}

      {lists.length == 0 ? (
        <div className="flex items-center justify-center pt-5">
          {email ? (
            <NewList>
              <div className=" bg-primary text-white px-5 py-2 rounded-md hover:scale-[1.05] active:scale-[0.95] transition-[0.15s]">
                Create new List
              </div>
            </NewList>
          ) : (
            "You need to be logged in to create a list."
          )}
        </div>
      ) : (
        <div className="pt-10">
          {" "}
          <NewList>
            <div className=" bg-primary text-white px-5 py-2 rounded-md hover:scale-[1.05] active:scale-[0.95] transition-[0.15s]">
              Create new List
            </div>
          </NewList>
        </div>
      )}
    </div>
  );
}
