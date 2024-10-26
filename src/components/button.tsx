import { ButtonHTMLAttributes } from "react";
import Arrow from "../icons/arrow";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

const Button = ({ label }: ButtonProps) => {
  return (
    <button className="flex gap-button items-center text-label ps-button-start pe-2 rounded-full min-h-button text-black dark:text-white border-2 border-black dark:border-white ">
      <span>{label}</span>
      <div className="p-8 rounded-full bg-black dark:bg-white">
        <Arrow className="text-white dark:text-black h-button-icon w-button-icon" />
      </div>
    </button>
  );
};

export default Button;
