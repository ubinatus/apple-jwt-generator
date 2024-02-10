import { CopyButton } from "@/components/copy-button";
import { CopyTextarea } from "@/components/copy-textarea";
import React from "react";

export function Result({
  value,
  onReset,
}: {
  value: string;
  onReset: () => void;
}) {
  return (
    <div className="space-y-4 w-full">
      <CopyTextarea
        value={value}
        className="border border-dashed rounded text-center text-gray-600 w-full max-w-lg over resize-none"
      />

      <div className="space-x-2">
        <button
          type="button"
          className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded"
          onClick={onReset}
        >
          Reset
        </button>
        <CopyButton value={value} />
      </div>
    </div>
  );
}
