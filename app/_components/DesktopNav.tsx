"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, type NavLink } from "../_content/site";
import { ServicesMenu } from "./ServicesMenu";

// The current page gets aria-current="page" (announced by screen readers)
// plus an underline, so "current" isn't signalled by color alone.
function NavItem({ link, current }: { link: NavLink; current: boolean }) {
  return (
    <Link
      href={link.href}
      aria-current={current ? "page" : undefined}
      className="inline-flex min-h-11 items-center font-medium text-charcoal decoration-2 underline-offset-8 hover:text-deep-sage aria-[current=page]:text-deep-sage aria-[current=page]:underline"
    >
      {link.label}
    </Link>
  );
}

/** Main navigation for large screens (hidden below the `lg` breakpoint). */
export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className="hidden lg:block">
      <ul className="flex items-center gap-10">
        <li>
          <NavItem link={nav.home} current={pathname === nav.home.href} />
        </li>
        <li>
          <NavItem link={nav.about} current={pathname === nav.about.href} />
        </li>
        <li>
          <ServicesMenu />
        </li>
        <li>
          <NavItem link={nav.contact} current={pathname === nav.contact.href} />
        </li>
      </ul>
    </nav>
  );
}
