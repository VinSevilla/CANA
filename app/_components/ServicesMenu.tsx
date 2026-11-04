"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, services } from "../_content/site";
import { ChevronIcon } from "./icons";
import { useDisclosure } from "./useDisclosure";

/**
 * Desktop "Services" disclosure menu.
 *
 * Deliberately NOT role="menu": ARIA menus are for application menus
 * (like a File menu) and require arrow-key handling. Site navigation uses
 * a button with aria-expanded that shows a normal list of links.
 */
export function ServicesMenu() {
  const pathname = usePathname();
  const { open, toggle, close, buttonRef, containerRef, onBlur } =
    useDisclosure();
  const inServices = pathname.startsWith(nav.services.href);

  return (
    <div
      ref={containerRef}
      className="relative"
      onBlur={onBlur}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="services-menu"
        onClick={toggle}
        className={`group inline-flex min-h-11 items-center gap-1.5 font-medium text-charcoal decoration-2 underline-offset-8 hover:text-deep-sage ${
          inServices ? "text-deep-sage underline" : ""
        }`}
      >
        {nav.services.label}
        <ChevronIcon className="size-4 group-aria-expanded:rotate-180" />
      </button>

      <div
        id="services-menu"
        hidden={!open}
        className="absolute left-1/2 top-full z-20 mt-2 w-80 -translate-x-1/2 rounded-xl border border-sage/40 bg-ivory p-2 shadow-lg shadow-espresso/10"
      >
        <ul>
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={service.href}
                onClick={close}
                className="flex min-h-11 items-center rounded-lg px-4 py-2 text-base text-charcoal hover:bg-sage/15 hover:text-espresso"
              >
                {service.name}
              </Link>
            </li>
          ))}
          <li className="mt-1 border-t border-sage/30 pt-1">
            <Link
              href={nav.services.href}
              onClick={close}
              aria-current={pathname === nav.services.href ? "page" : undefined}
              className="flex min-h-11 items-center rounded-lg px-4 py-2 text-base font-medium text-deep-sage hover:bg-sage/15"
            >
              {nav.services.allLabel}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
