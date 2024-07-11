"use client";

import { useFormStatus } from "react-dom";

function SubmitButton({ children }: { children: string }) {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>{pending ? "Loading..." : children}</button>
  );
}

export default SubmitButton;
