import clsx from "clsx";
import { ComponentProps, ElementType } from "react";

type ButtonOwnProps<E extends ElementType = ElementType> = {
  children?: React.ReactNode;
  className?: string;
  as?: E;
  icon?: string;
};

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps>;

const defaultProps: Partial<ButtonOwnProps> = {
  children: "Button",
  className:
    "border rounded-2xl font-inter text-sm font-medium transition duration-300 relative",
};

const defaultElement = "button";

export function Button<E extends ElementType = typeof defaultElement>({
  children = defaultProps.children,
  className = defaultProps.className,
  as,
  icon,
  ...otherProps
}: ButtonProps<E>) {
  const TagName = as || defaultElement;
  const isDisabled = (otherProps as { disabled?: boolean }).disabled || false;

  return (
    <TagName
      className={clsx(
        defaultProps.className,
        className,
        isDisabled && "cursor-not-allowed",
        !isDisabled && "cursor-pointer hover:bg-blue-300",
      )}
      {...otherProps}
    >
      {icon && (
        <img
          src={icon}
          alt="icon"
          className="absolute top-0 left-0 translate-x-1/2 translate-y-1/2 transform"
        />
      )}
      <span className={icon ? "pl-5" : ""}>{children}</span>
    </TagName>
  );
}
