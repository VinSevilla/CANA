import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { SiteFooter } from "./_components/SiteFooter";
import { SiteHeader } from "./_components/SiteHeader";
import { MAIN_ID } from "./_components/ids";
import { site, skipLinkLabel } from "./_content/site";
import "./globals.css";

// next/font self-hosts these at build time: visitors' browsers never
// contact Google, and fallback-font sizing prevents layout shift.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Serif for H1/H2 only. Medium (500) and up: thinner weights get hard
// to read.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  // Prototype contains placeholders: keep it out of search engines.
  // Remove before launch.
  robots: { index: false, follow: false },
};

// Light mode only: tell browsers not to auto-darken form controls etc.
export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f7f3ea",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="flex min-h-dvh flex-col">
        {/* First focusable element: lets keyboard users jump past the nav. */}
        <a
          href={`#${MAIN_ID}`}
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-espresso focus:px-4 focus:py-3 focus:text-ivory"
        >
          {skipLinkLabel}
        </a>
        <SiteHeader />
        {/* tabIndex={-1} lets the skip link move focus here. */}
        <main id={MAIN_ID} tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
