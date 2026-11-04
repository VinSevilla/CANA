import Link from "next/link";
import { footer, services, site } from "../_content/site";
import { Container } from "./Container";
import { CopyText } from "./CopyText";

const linkClass =
  "inline-flex min-h-6 items-center py-1 text-charcoal decoration-1 underline-offset-4 hover:text-deep-sage hover:underline";

// Column headings are H2s for document structure, styled in Inter
// (small caps label look) rather than the display serif.
const headingClass =
  "font-sans text-sm font-semibold uppercase tracking-[0.18em] text-espresso";

/**
 * Site-wide footer (rendered by the root layout). Features the three
 * services. No Book button here (one Book button per viewport: the
 * consultation panel's is directly above on the homepage).
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-sage/40 py-16 text-base lg:py-20">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="text-xl font-semibold tracking-[0.35em] text-espresso">
              {site.wordmark}
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-deep-sage">
              {site.tagline}
            </p>
          </div>

          <nav aria-labelledby="footer-services" className="lg:col-span-3">
            <h2 id="footer-services" className={headingClass}>
              {footer.servicesHeading}
            </h2>
            <ul className="mt-4 space-y-1">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={service.href} className={linkClass}>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-clinic" className="lg:col-span-2">
            <h2 id="footer-clinic" className={headingClass}>
              {footer.clinicHeading}
            </h2>
            <ul className="mt-4 space-y-1">
              {footer.clinicLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h2 className={headingClass}>{footer.contactHeading}</h2>
            <dl className="mt-4 space-y-3">
              {footer.contact.map((item) => (
                <div key={item.label}>
                  <dt className="text-sm font-medium text-espresso">{item.label}</dt>
                  <dd className="mt-0.5">
                    <CopyText value={item.value} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-14 space-y-4 border-t border-sage/30 pt-8 text-sm">
          <p>
            <CopyText value={footer.disclaimer} />
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {footer.legal.map((item) => (
              <li key={item.confirm}>
                <CopyText value={item} />
              </li>
            ))}
          </ul>
          <p>
            © {footer.copyrightYear} <CopyText value={footer.copyrightHolder} />
          </p>
        </div>
      </Container>
    </footer>
  );
}
