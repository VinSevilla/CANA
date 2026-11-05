"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, services, type NavLink } from "../_content/site";
import { MenuIcon } from "./icons";
import { useDisclosure } from "./useDisclosure";

/**
 * Mobile navigation (below the `lg` breakpoint).
 *
 * A non-modal disclosure panel under the header, not a full-screen dialog:
 * it needs no focus trap, and page content stays reachable. Book
 * Consultation is NOT repeated here: it's already visible in the header
 * (one Book button per viewport).
 */
function Item({
  link,
  pathname,
  onSelect,
  nested = false,
}: {
  link: NavLink;
  pathname: string;
  onSelect: () => void;
  nested?: boolean;
}) {
  return (
    <Link
      href={link.href}
      onClick={onSelect}
      aria-current={pathname === link.href ? "page" : undefined}
      className={`flex min-h-11 items-center rounded-lg px-4 decoration-2 underline-offset-4 hover:underline aria-[current=page]:text-deep-sage aria-[current=page]:underline ${
        nested ? "text-base text-charcoal" : "text-lg font-medium text-espresso"
      }`}
    >
      {link.label}
    </Link>
  );
}

export function MobileMenu() {
  const pathname = usePathname();
  const { open, toggle, close, buttonRef, containerRef, onBlur } =
    useDisclosure();
  const itemProps = { pathname, onSelect: close };

  return (
    <div
      ref={containerRef}
      className="lg:hidden"
      onBlur={onBlur}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={toggle}
        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-espresso/25 px-4 text-sm font-medium text-espresso hover:border-deep-sage hover:text-deep-sage"
      >
        <MenuIcon open={open} className="size-5" />
        Menu
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full z-20 max-h-[calc(100dvh-5rem)] overflow-y-auto border-y border-sage/40 bg-ivory shadow-lg shadow-espresso/10"
      >
        <nav aria-label="Main" className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <ul className="space-y-1">
            <li>
              <Item link={nav.home} {...itemProps} />
            </li>
            <li>
              <Item link={nav.about} {...itemProps} />
            </li>
            <li>
              <Item link={nav.services} {...itemProps} />
              <ul className="ml-4 border-l border-sage/50 pl-2">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Item
                      link={{ label: service.name, href: service.href }}
                      {...itemProps}
                      nested
                    />
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Item link={nav.contact} {...itemProps} />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
