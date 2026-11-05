import Link from "next/link";
import { site } from "../_content/site";
import { BookButton } from "./BookButton";
import { Container } from "./Container";
import { DesktopNav } from "./DesktopNav";
import { HEADER_BOOK_ID } from "./ids";
import { MobileMenu } from "./MobileMenu";

/**
 * Server Component: the static parts render as plain HTML; only the
 * interactive pieces (DesktopNav, MobileMenu) ship JavaScript.
 *
 * Not sticky (approved: desktop has no persistent Book button; below `lg`
 * StickyBookBar takes over once this button scrolls away). There is exactly ONE Book
 * button here at every screen size; HEADER_BOOK_ID lets the
 * sticky bar detect when it scrolls out of view.
 */
export function SiteHeader() {
  return (
    <header className="relative border-b border-sage/30">
      <Container className="flex items-center justify-between gap-4 py-4 lg:py-6">
        {/* Temporary text wordmark until the final logo exists. */}
        <Link href="/" className="flex min-h-11 flex-col justify-center leading-none">
          <span className="text-xl font-semibold tracking-[0.35em] text-espresso">
            {site.wordmark}
          </span>
          {/* Too wide beside Book + Menu on phones: visually hidden below
              `sm`, still read by screen readers ("CANA Health & Wellness"). */}
          <span className="mt-1.5 whitespace-nowrap text-[0.6875rem] uppercase tracking-[0.2em] text-deep-sage max-sm:sr-only">
            {" "}
            {site.tagline}
          </span>
        </Link>

        <DesktopNav />

        <div className="flex items-center gap-2 sm:gap-3">
          <BookButton id={HEADER_BOOK_ID} compact />
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
