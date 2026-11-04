"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FocusEvent,
} from "react";
import { usePathname } from "next/navigation";

/**
 * Open/close state for a click-to-open panel (WAI-ARIA "disclosure" pattern),
 * shared by the desktop Services menu and the mobile menu.
 *
 * Closing rules (AGENTS.md accessibility section):
 * - Navigating to another page closes it.
 * - Escape closes it and returns focus to the toggle button.
 * - Clicking outside, or tabbing out of it, closes it.
 */
export function useDisclosure() {
  const pathname = usePathname();

  // Store the page the panel was opened on instead of a plain boolean.
  // After any navigation the pathname changes, `openedOn !== pathname`,
  // and the panel is closed — no effect or listener needed. This matters
  // because the header lives in the root layout, which stays mounted
  // between pages.
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const open = openedOn === pathname;

  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpenedOn(null), []);
  const toggle = () => setOpenedOn(open ? null : pathname);

  // While open, listen on the whole document (syncing with something
  // outside React is what effects are for):
  // - Click/tap outside closes.
  // - Escape closes and returns focus to the button. This must be on
  //   `document`, not the container: Safari doesn't focus a button on
  //   click, so after a mouse click the key event never reaches it.
  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) close();
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      close();
      buttonRef.current?.focus();
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  // Tabbing out closes. Only act when focus moved to a *known* element
  // outside: Safari doesn't focus links/buttons on click, so a null
  // relatedTarget must not close the panel (outside clicks are handled
  // by the pointerdown listener above).
  function onBlur(event: FocusEvent) {
    const next = event.relatedTarget as Node | null;
    if (open && next && !containerRef.current?.contains(next)) close();
  }

  return { open, toggle, close, buttonRef, containerRef, onBlur };
}
