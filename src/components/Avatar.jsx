"use client";

import jazzicon from "@metamask/jazzicon";
import { useEffect, useRef } from "react";

function toHex(str) {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    result += str.charCodeAt(i).toString(16);
  }
  return result;
}

export default function Avatar({ account, size = 20 }) {
  //hash the account address to get a unique seed
  account = toHex(account);
  const avatarRef = useRef();
  useEffect(() => {
    const element = avatarRef.current;
    if (element && account) {
      const addr = account.slice(2, 10);
      const seed = parseInt(addr, 16);
      const icon = jazzicon(size, seed); //generates a size 20 icon
      if (element.firstChild) {
        element.removeChild(element.firstChild);
      }
      element.appendChild(icon);
    }
  }, [account, avatarRef]);

  return (
    <div
      ref={avatarRef}
      style={{
        height: size,
        width: size,
        minWidth: size,
        minHeight: size,
        borderRadius: "9999px",
      }}
    ></div>
  );
}
