import { JSX } from "react";

export interface IButtonProps {
  label?: string;
  type?: "default" | "secondary";
}

export const Button = ({
  label = "Label text",
  type = "default",
}: IButtonProps): JSX.Element => {
  const buttonClass =
    type === "default"
      ? "bg-gray-900"
      : "border border-solid border-gray-200 box-border";
  const textClass = type === "default" ? "text-base-white" : "text-gray-400";
  return (
    <div
      className={`${buttonClass} px-4 py-2 rounded-xl flex flex-col items-center justify-center`}
    >
      <div className={`${textClass} text-center`}>{label}</div>
    </div>
  );
};
