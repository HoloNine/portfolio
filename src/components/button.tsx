import { ButtonHTMLAttributes } from "react";
import Arrow from "../icons/arrow";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

const Button = ({ label }: ButtonProps) => {
  return (
    <button className="flex gap-16 items-center text-label ps-32 pe-2 rounded-full min-h-12 text-black dark:text-white border-2 border-black dark:border-white ">
      <span>{label}</span>
      <div className="p-1 rounded-full bg-black dark:bg-white">
        <Arrow className="text-white dark:text-black" />
      </div>
    </button>
  );
};

export default Button;
