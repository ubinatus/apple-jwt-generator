import React from "react";

type Props = {
  label: string;
  name: string;
  extra?: string;
  type: React.HTMLInputTypeAttribute;
};

// Need shadcn!
export function FormInput({ label, name, type, extra }: Props) {
  return (
    <div className="w-full">
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} className="ml-1.5 border" />
      {extra && <div className="text-sm text-gray-500">{extra}</div>}
    </div>
  );
}
