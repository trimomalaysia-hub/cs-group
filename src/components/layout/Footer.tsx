import Container from "@/components/ui/Container";
import { site } from "@/lib/site";
import { companies } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg">
      <Container className="py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-full border border-line-strong font-display text-accent">
                K
              </span>
              <span className="font-display text-lg text-fg">{site.name}</span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
              {site.tagline}
            </p>
            <p className="mt-6 text-sm text-faint">
              Founded by {site.founder}
            </p>
          </div>

          {/* Companies */}
          <div className="lg:col-span-3">
            <h3 className="label text-faint">Companies</h3>
            <ul className="mt-5 space-y-3">
              {companies.map((c) => (
                <li key={c.id}>
                  <a href="#companies" className="text-sm text-muted transition-colors hover:text-fg">
                    {c.brand}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigate */}
          <div className="lg:col-span-2">
            <h3 className="label text-faint">Navigate</h3>
            <ul className="mt-5 space-y-3">
              {site.nav.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-muted transition-colors hover:text-fg">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h3 className="label text-faint">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-fg">
                  {site.email}
                </a>
              </li>
              <li>{site.location}</li>
              <li className="flex gap-4 pt-2">
                {Object.entries(site.social).map(([name, url]) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="capitalize text-faint transition-colors hover:text-accent"
                  >
                    {name}
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-8 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <p>Technology · Hospitality · Capital</p>
        </div>
      </Container>
    </footer>
  );
}
