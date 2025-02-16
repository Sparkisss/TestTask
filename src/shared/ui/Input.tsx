import clsx from "clsx";
import { ComponentProps, ElementType } from "react";
import Search from "@/assets/icons/Search.svg";

type InputOwnProps<E extends ElementType = ElementType> = {
  value?: string;
  className?: string;
  as?: E;
  placeholder?: string;
};

type InputProps<E extends ElementType> = InputOwnProps<E> &
  Omit<ComponentProps<E>, keyof InputOwnProps>;

const defaultProps: Partial<InputOwnProps> = {
  value: "",
  className:
    "h-14.25 w-87 border rounded-2xl p-3 text-sm font-medium transition duration-300 bg-inputBG",
  placeholder: "Enter text...",
};

const defaultElement = "input";

export function Input<E extends ElementType = typeof defaultElement>({
  value = defaultProps.value,
  className = defaultProps.className,
  as,
  placeholder = defaultProps.placeholder,
  ...otherProps
}: InputProps<E>) {
  const TagName = as || defaultElement;
  const isDisabled = (otherProps as { disabled?: boolean }).disabled || false;

  return (
    <div className="relative">
      <img
        src={Search}
        alt="icon"
        className="absolute top-1/2 left-3 -translate-y-1/2 transform"
      />
      <TagName
        value={value}
        placeholder={placeholder}
        className={clsx(
          defaultProps.className,
          className,
          isDisabled && "cursor-not-allowed",
          !isDisabled && "cursor-text pl-10 focus:ring-2 focus:ring-blue-400",
        )}
        {...otherProps}
      />
    </div>
  );
}
