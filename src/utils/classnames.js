import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility function to handle class merging and conditionally applying classes
export const cn = (...classes) => {
  return twMerge(clsx(...classes));
};
