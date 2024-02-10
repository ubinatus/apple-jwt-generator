"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";

import { useDropzone } from "react-dropzone";

import { generate } from "./action";
import { FormInput } from "@/components/form-input";
import { Result } from "./result";

export function Form() {
  const [result, setResult] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [inputMethod, setInputMethod] = useState<"file" | "text">("file");

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      "text/plain": [".txt"],
      "application/octet-stream": [".p8"],
    },
    multiple: false,
    onDrop(files) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        setPrivateKey(event.target?.result?.toString() || "");
      };
      reader.readAsText(file);
    },
  });

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputMethod(e.target.value as "file" | "text");
    setPrivateKey("");
    acceptedFiles.splice(0, 1);
  };

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPrivateKey(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!privateKey) return alert("Upload or enter the private key");

    // @ts-expect-error Extract form data.
    const formData = new FormData(e.target);

    const teamId = formData.get("teamId") as string;
    const keyId = formData.get("keyId") as string;
    const clientId = formData.get("clientId") as string;

    try {
      const jwt = await generate({
        teamId,
        keyId,
        clientId,
        privateKey,
      });

      setResult(jwt);
    } catch (error) {
      alert((error as Error).message);
    }
  };

  if (result) {
    return <Result value={result} onReset={() => setResult("")} />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-center w-full">
      <div className="w-full space-y-4">
        <FormInput
          label="Team ID"
          type="text"
          name="teamId"
          extra="Team ID from Apple Developer Account"
        />
        <FormInput
          label="Key ID"
          type="text"
          name="keyId"
          extra={"Found in Apple Developer Portal > Keys > Key details"}
        />
        <FormInput
          label="Client ID"
          type="text"
          name="clientId"
          extra="Application bundle"
        />
      </div>

      <div className="max-w-sm mx-auto">
        <div className="flex items-center justify-around text-center">
          <label>
            <input
              type="radio"
              value="file"
              checked={inputMethod === "file"}
              onChange={handleRadioChange}
              className="mr-1.5"
            />
            Upload Key
          </label>
          <label>
            <input
              type="radio"
              value="text"
              checked={inputMethod === "text"}
              onChange={handleRadioChange}
              className="mr-1.5"
            />
            Input Key
          </label>
        </div>

        <div className="flex flex-col items-center justify-center min-h-24">
          {inputMethod === "file" ? (
            <div
              {...getRootProps()}
              className="border border-dashed rounded px-4 py-8 text-sm text-gray-600 cursor-pointer w-full"
            >
              <input {...getInputProps()} />
              {acceptedFiles[0] ? (
                <div>{acceptedFiles[0].name}</div>
              ) : (
                <>
                  <p>Drag 'n' drop your file, or click to select a file</p>
                  <em>(Only *.p8 and *.txt files will be accepted)</em>
                </>
              )}
            </div>
          ) : (
            <textarea
              rows={4}
              value={privateKey}
              onChange={handleTextChange}
              className="border resize-none w-full px-2 py-3 rounded text-sm"
              placeholder={
                "-----BEGIN PRIVATE KEY-----\nxxxxxxxxx\nxxxxxxxxx\n-----END PRIVATE KEY-----"
              }
            />
          )}
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        Generate
      </button>
    </form>
  );
}
