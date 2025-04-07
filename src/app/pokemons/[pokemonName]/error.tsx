"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import Error from "@/predefined/ui/Error";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <Error reset={reset} />;
}
