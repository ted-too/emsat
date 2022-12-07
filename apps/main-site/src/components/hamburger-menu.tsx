import { IconButton } from "./kit/buttons";
import { HamburgerMenu } from "./kit/icons";
import clsx from "clsx";
import { FocusTrap, createFocusTrap } from "focus-trap";
import { AnimatePresence, motion } from "framer-motion";
import type { FunctionComponent } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

const SideHamburgerMenu: FunctionComponent = () => {
  const [isOpen, setOpen] = useState(false);
  let trap: FocusTrap;
  const menu = useRef<HTMLDivElement>(null);
  const hamburgerBtn = useRef<HTMLButtonElement>(null);
  const openMenu = () => {
    trap.activate();
    document.body.classList.add("no-scroll");
    setOpen(true);
  };
  const closeMenu = () => {
    if (!isOpen) return;
    trap.deactivate();
    hamburgerBtn.current?.focus()
    document.body.classList.remove("no-scroll");
    setOpen(false);
  };
  const toggleMenu = () => (isOpen ? closeMenu() : openMenu());
  useEffect(() => {
    trap = createFocusTrap(menu.current!, { initialFocus: false, clickOutsideDeactivates: true });
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menu.current?.contains(e.target as any) ||
        hamburgerBtn.current?.contains(e.target as any)
      )
        return;
      closeMenu();
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      closeMenu();
    };
    document.addEventListener("keydown", handleEscape);
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      <IconButton
        onClick={toggleMenu}
        class="md:hidden border rounded border-dark-200"
        size="sm"
        label="Open side menu"
        ref={hamburgerBtn as any}
      >
        <HamburgerMenu class="text-dark" />
      </IconButton>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0, transition: { duration: 0.15 } }}
            exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.15 } }}
            class="bg-[rgba(0,0,0,0.5)] w-full h-full absolute left-0 top-0"
          />
        )}
      </AnimatePresence>
      <aside
        class={clsx(
          "transition-transform duration-150 ease-in left-0 top-0 h-full w-52 bg-white absolute",
          isOpen ? "translate-x-0" : "-translate-x-52"
        )}
        ref={menu as any}
      >
        <button>Test 1</button>
        <button>Test 2</button>
      </aside>
    </>
  );
};

export default SideHamburgerMenu;
