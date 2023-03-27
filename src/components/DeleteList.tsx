"use client";

import { gql } from "graphql-request";
import { client } from "@/lib/client";
import { useRouter } from "next/navigation";

type DeleteListProps = {
  id: number;
};

export default function DeleteList({ id }: DeleteListProps) {
  const router = useRouter();
  async function deleteList(id: string) {
    const DELETE_MOVIE_LIST = gql`
      mutation DeleteList($deleteListId: Int!) {
        deleteList(id: $deleteListId)
      }
    `;
    try {
      const { deleteList } = await client.request<{
        deleteList: boolean;
      }>(DELETE_MOVIE_LIST, {
        deleteListId: parseInt(id),
      });
      router.push("/my-lists");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <button
      className="bg-red-500 text-white px-5 py-2 rounded-md mt-5 hover:scale-105 transition-all duration-200 active:scale-95"
      onClick={() => deleteList(id.toString())}
    >
      Delete List
    </button>
  );
}
