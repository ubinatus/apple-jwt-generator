"use client";

import { useEffect, useState } from "react";

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: string;
}

export function CopyButton({ value, className, ...props }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = useState(false);

  useEffect(() => {
    if (hasCopied) {
      setTimeout(() => {
        setHasCopied(false);
      }, 2000);
    }
  }, [hasCopied]);

  return (
    <button
      type="button"
      className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
      onClick={() => {
        navigator.clipboard.writeText(value);
        setHasCopied(true);
      }}
      {...props}
    >
      {hasCopied ? "✅ Copied!" : "Copy to clipboard"}
    </button>
  );
}
