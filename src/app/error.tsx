"use client";

import Ohno from "@/components/Ohno";

export default function Error() {
  return (
    <div className="flex items-center justify-center">
      <Ohno message="A terrible error just occured" />
    </div>
  );
}
