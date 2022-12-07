import clsx from "clsx";
import type { ComponentProps, FunctionComponent } from "preact";
import { forwardRef } from "preact/compat";

interface BaseProps {
  size?: "sm" | "base" | "lg";
  disabled?: boolean;
  invert?: boolean;
}

interface IconButtonProps extends BaseProps, Omit<ComponentProps<"button">, "disabled" | "size"> {
  variant?: "outline" | "solid" | "transparent";
  label: string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      class: clazz,
      size = "base",
      variant = "solid",
      invert = false,
      disabled = false,
      label,
      ...rest
    },
    ref
  ) => (
    <button
      class={clsx(
        "aspect-square active:bg-black-50 w-max disabled:pointer-events-none disabled:opacity-75",
        size === "sm" && "p-2",
        size === "base" && "p-3",
        size === "lg" && "p-4",
        variant === "transparent"
          ? "hover:opacity-80 focus:outline-none focus:text-melon-500"
          : "focus-ring",
        variant === "solid" &&
          clsx(
            "hover:opacity-90",
            invert ? "bg-base text-primary" : "bg-base-inverse text-primary-inverse"
          ),
        variant === "outline" && "border-[1.5px] border-primary hover:bg-black-100",
        clazz
      )}
      onMouseDown={(e) => e.preventDefault()}
      aria-label={label}
      ref={ref}
      {...rest}
    />
  )
);
