import React from "react";

interface ButtonProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  isLoading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode | null;
}

function Button({ text, type, onClick, variant, icon }: ButtonProps) {
  const style =
    variant?.toLowerCase() === "primary"
      ? "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-burgundy-600 hover_bg-burgundy-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-burgundy-500"
      : "bg-burgundy-600 hover:bg-burgundy-700 text-white px-8 py-3 rounded-full flex items-center space-x-2";

  return (
    <button type={type} className={style} onClick={onClick}>
      <span>{text}</span>
      {icon ? icon : null}
    </button>
  );
}

export default Button;
