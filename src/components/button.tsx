"use client";

import { join } from "@/utilities/join";
import { ReactNode } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type Props = ButtonProps & {
  variant?: string;
  children: ReactNode;
};

type ButtonVariantsProps = {
  [key: string]: string | undefined;
};

const BUTTON_VARIANTS: ButtonVariantsProps = {
  primary:
    "py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600",
  secondary:
    "py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600",
};

const Button = ({
  className,
  variant = "primary",
  children,
  ...props
}: Props) => {
  return (
    <button
      type="button"
      className={join(BUTTON_VARIANTS[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
