"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import { site } from "@/lib/site";
import { companies } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg">
      <Container className="py-20">
        {/* Brand takes a third; the three link columns share the rest as exact
            equal thirds. Nesting them is what guarantees that — spanning 3/2/2
            of a 12-column grid made Companies wider than its neighbours, and no
            whole-number split of 8 columns into 3 is possible. */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="hv-mark flex w-fit items-center gap-2.5">
              <Image
                src="/brand/cs-mark.png"
                alt=""
                width={340}
                height={266}
                className="h-8 w-auto"
              />
              <span className="font-display text-lg text-fg">{site.name}</span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">{t.footer.tagline}</p>
            <p className="mt-6 text-sm text-faint">
              {t.footer.foundedBy} {site.founder}
            </p>
          </div>

          <div className="grid gap-12 sm:grid-cols-3 sm:gap-8 lg:col-span-8">
          {/* Companies */}
          <div>
            <h3 className="label text-faint">{t.footer.companies}</h3>
            <ul className="mt-5 space-y-3">
              {companies.map((c) => (
                <li key={c.id}>
                  <a href={`/companies/${c.id}`} className="hv-link text-sm text-muted">
                    {c.brand}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="label text-faint">{t.footer.navigate}</h3>
            <ul className="mt-5 space-y-3">
              {/* The whole nav — Contact is no longer one of its entries; the
                  "Get in touch" column beside this one carries that. */}
              {site.nav.map((item, i) => (
                <li key={item.href}>
                  <a href={item.href} className="hv-link text-sm text-muted">
                    {t.nav[i]}
                  </a>
                </li>
              ))}
              <li>
                <a href={site.careersHref} className="hv-link text-sm text-muted">
                  {t.header.careers}
                </a>
              </li>
              <li>
                <a href={site.investHref} className="hv-link text-sm text-muted">
                  {t.header.investors}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact — a plain stack, not a list: the email, the address block
              and the social row are three different kinds of thing, and forcing
              them into one <ul> with a single space-y gave the uneven rhythm. */}
          <div>
            <h3 className="label text-faint">{t.footer.getInTouch}</h3>
            <div className="mt-5 text-sm text-muted">
              <a href={`mailto:${site.email}`} className="hv-link">
                {site.email}
              </a>

              <address className="mt-4 not-italic leading-relaxed">
                {site.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>

              <div className="mt-6 flex gap-4">
                {Object.entries(site.social).map(([name, url]) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hv-link to-gold capitalize text-faint"
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-8 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.legalName}. {t.footer.rights}</p>
          <p>{t.footer.tagcloud}</p>
        </div>
      </Container>
    </footer>
  );
}
