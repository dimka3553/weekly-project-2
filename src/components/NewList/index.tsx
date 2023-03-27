"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";
import { gql } from "graphql-request";
import { client } from "@/lib/client";

type NewListProps = {
  children: React.ReactNode;
};
type CreateList = {
  createList: {
    name: string;
    id: string;
  };
};

export default function NewList({ children }: NewListProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setEmail(email);
    }
  }, []);

  const handleNewList = async () => {
    const NEW_LIST_MUTATION = gql`
      mutation CreateNewList($input: CreateListInput!) {
        createList(input: $input) {
          name
          id
        }
      }
    `;
    const variables = {
      input: {
        email: email,
        name: inputValue,
      },
    };

    const data = (await client.request(
      NEW_LIST_MUTATION,
      variables
    )) as CreateList;

    router.push(`/my-lists/${data.createList.id}`);
  };

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
                  New List
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
                Please enter the new list name
              </Dialog.Description>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full border border-gray-400 p-2 rounded-md mb-4 text-black disabled:text-gray-400"
                placeholder="Name"
              />

              <button
                onClick={handleNewList}
                className="bg-primary text-white px-5 py-2 rounded-md hover:scale-[1.02] active:scale-[0.98] transition-[0.15s]"
              >
                Create List
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Root>
    </>
  );
}
