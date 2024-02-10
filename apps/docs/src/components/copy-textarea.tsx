import { useRef } from "react";

type Props = {
  value: string;
  className?: string;
};

export const CopyTextarea: React.FC<Props> = ({ value, className }) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const copyToClipboard = () => {
    textAreaRef.current?.select();

    const text = textAreaRef.current?.value;
    if (text) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          console.log("Text copied to clipboard");
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    }
  };

  return (
    <textarea
      ref={textAreaRef}
      readOnly
      value={value}
      className={className}
      onClick={copyToClipboard}
      rows={3}
    />
  );
};
