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
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
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

          {/* Companies */}
          <div className="lg:col-span-3">
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
          <div className="lg:col-span-2">
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

          {/* Contact */}
          <div className="lg:col-span-2">
            <h3 className="label text-faint">{t.footer.getInTouch}</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>
                <a href={`mailto:${site.email}`} className="hv-link">
                  {site.email}
                </a>
              </li>
              <li>
                <address className="not-italic leading-relaxed">
                  {site.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </li>
              <li className="flex gap-4 pt-2">
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
              </li>
            </ul>
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
