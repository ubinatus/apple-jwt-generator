import Link from "next/link";

import { Form } from "./form";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 px-2 sm:px-0 text-center">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
        Apple JWT Generator
      </h1>
      <p>
        Derive a client secret yourself from your private key, using ES256 JWT
        algorithm.
      </p>

      <Form />

      <div className="text-sm text-gray-400 space-y-1">
        🔐 <em>Your data will never be stored.</em>
        <div className="text-gray-500">
          <Link
            href="https://dub.sh/apple-jwt-generator"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            View Github repo
          </Link>
        </div>
      </div>
    </div>
  );
}
