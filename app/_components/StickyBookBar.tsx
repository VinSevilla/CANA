"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BookButton } from "./BookButton";
import { HEADER_BOOK_ID, PANEL_BOOK_ID } from "./ids";

/**
 * Mobile/tablet sticky Book Consultation bar (below `lg`).
 *
 * Shown only while NEITHER the header's Book button NOR the consultation
 * panel's Book button is on screen, so there is never more than one Book
 * button in view (AGENTS.md).
 *
 * When not shown it uses the `hidden` attribute, which removes it from
 * the tab order and the accessibility tree, not just from sight.
 * Appears/disappears instantly: no animation.
 */
export function StickyBookBar() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Re-run per page: the panel button only exists on the homepage.
    const header = document.getElementById(HEADER_BOOK_ID);
    const panel = document.getElementById(PANEL_BOOK_ID);
    const visible = new Map<Element, boolean>();

    // IntersectionObserver reports when an element enters or leaves the
    // viewport, without listening to every scroll event. It also fires
    // once immediately for each observed element, so the initial state
    // is correct after every navigation.
    // `isIntersecting` is also true when an edge merely touches the
    // viewport (0px visible), so we require real visible area. The extra
    // tiny threshold matters: callbacks only fire when a threshold is
    // crossed, and "1px visible" → "edge touching" crosses only 0.001,
    // not 0. Without it there is one scroll position where neither the
    // button nor the bar shows.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible.set(entry.target, entry.isIntersecting && entry.intersectionRatio > 0);
        }
        const headerInView = header ? (visible.get(header) ?? true) : false;
        const panelInView = panel ? (visible.get(panel) ?? false) : false;
        setShow(!headerInView && !panelInView);
      },
      { threshold: [0, 0.001] },
    );

    if (header) observer.observe(header);
    if (panel) observer.observe(panel);
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <div
      data-sticky-book
      hidden={!show}
      className="fixed inset-x-0 bottom-0 z-30 border-t border-sage/40 bg-ivory px-4 py-3 shadow-[0_-4px_16px_rgb(59_42_31/0.08)] lg:hidden"
    >
      <BookButton fullWidth />
    </div>
  );
}
