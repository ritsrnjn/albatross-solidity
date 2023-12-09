import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ulid } from "ulid";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const newId = () => {
  return ulid().toLowerCase();
};
