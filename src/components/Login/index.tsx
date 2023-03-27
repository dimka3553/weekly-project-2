"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Avatar from "@/components/Avatar";
import { useRouter } from "next/navigation";

type LoginProps = {
  setLoggedIn: (value: boolean) => void;
  children: React.ReactNode;
};

export default function Login({ setLoggedIn, children }: LoginProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setEmail(email);
      setInputValue(email);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem("email", inputValue);
    setEmail(inputValue);
    setIsOpen(false);
    setLoggedIn(true);
    router.push("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("email");
    setEmail("");
    setIsOpen(false);
    setLoggedIn(false);
    router.push("/");
  };

  return (
    <>
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Trigger className="text-primary">
          {" "}
          {email ? (
            <div className="hover:scale-105 active:scale-95 transition-[0.15s]">
              <Avatar account={email} size={30} />{" "}
            </div>
          ) : (
            <div>{children}</div>
          )}{" "}
        </Dialog.Trigger>
        <Dialog.Overlay className={styles.DialogOverlay}>
          <Dialog.Content className={styles.DialogContent}>
            <div className="px-5 pb-5">
              <div className="flex items-center h-[60px] justify-between">
                <Dialog.Title className="text-xl font-bold text-black">
                  {email ? "Account " : "Log in"}
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
                {email ? "You are logged in as " : " Please enter your email"}
              </Dialog.Description>
              <input
                type="email"
                value={inputValue}
                disabled={email ? true : false}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full border border-gray-400 p-2 rounded-md mb-4 text-black disabled:text-gray-400"
                placeholder="Email"
              />
              {email ? (
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-5 py-2 rounded-md hover:scale-[1.02] active:scale-[0.98] transition-[0.15s]"
                >
                  Log out
                </button>
              ) : (
                <button
                  onClick={handleLogin}
                  className="bg-primary text-white px-5 py-2 rounded-md hover:scale-[1.02] active:scale-[0.98] transition-[0.15s]"
                >
                  Log in
                </button>
              )}
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Root>
    </>
  );
}
