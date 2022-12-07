import clsx from "clsx";
import type { ComponentProps, FunctionComponent } from "preact";

interface LinkProps extends Omit<ComponentProps<"a">, "href"> {
  to: string;
  underlineHover?: boolean;
}

const Link: FunctionComponent<LinkProps> = ({
  to,
  class: clazz,
  children,
  underlineHover,
  ...rest
}) => {
  return (
    <a
      href={to}
      class={clsx(
        "group relative transition duration-300 hover:opacity-80 focus-ring w-max",
        clazz
      )}
      {...rest}
    >
      {children}
      <span
        class={clsx(
          "block max-w-0 rounded group-focus:max-w-full transition-all duration-300 h-[1px] bg-base",
          underlineHover && "group-hover:max-w-full"
        )}
      />
    </a>
  );
};

export default Link;
