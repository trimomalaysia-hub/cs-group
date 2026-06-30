import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { site } from "@/lib/site";

/* Wire the form to a service (e.g. Formspree) by replacing the action below. */
const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const inputCls =
  "w-full rounded-lg border border-line bg-surface/60 px-4 py-3 text-fg placeholder:text-faint outline-none transition-colors duration-300 focus:border-accent/60 focus:bg-surface";

export default function Contact() {
  return (
    <Section id="contact" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-[-12rem] left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent/[0.05] blur-[140px]"
        aria-hidden
      />

      <div className="relative grid gap-16 lg:grid-cols-12 lg:gap-20">
        {/* Invitation */}
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow index="07">Contact</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-4xl leading-[1.06] sm:text-5xl lg:text-6xl">
              Let&rsquo;s build something that lasts.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              For partnership, investment or media enquiries, reach out — we read
              every message and reply with intent.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="mt-12 space-y-6">
              <div>
                <dt className="label text-faint">General</dt>
                <dd className="mt-2">
                  <a href={`mailto:${site.email}`} className="text-fg transition-colors hover:text-accent">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label text-faint">Investor relations</dt>
                <dd className="mt-2">
                  <a href={`mailto:${site.investorEmail}`} className="text-fg transition-colors hover:text-accent">
                    {site.investorEmail}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label text-faint">Office</dt>
                <dd className="mt-2 text-muted">{site.location}</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        {/* Form */}
        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <form
              action={FORM_ENDPOINT}
              method="POST"
              className="rounded-2xl border border-line bg-surface/30 p-8 sm:p-10"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="label text-faint">Name</label>
                  <input id="name" name="name" type="text" required className={`mt-2 ${inputCls}`} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="label text-faint">Email</label>
                  <input id="email" name="email" type="email" required className={`mt-2 ${inputCls}`} placeholder="you@company.com" />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="organisation" className="label text-faint">Organisation</label>
                <input id="organisation" name="organisation" type="text" className={`mt-2 ${inputCls}`} placeholder="Company / fund (optional)" />
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="label text-faint">Message</label>
                <textarea id="message" name="message" rows={5} required className={`mt-2 resize-none ${inputCls}`} placeholder="How can we help?" />
              </div>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Button size="lg" className="w-full sm:w-auto">Send enquiry</Button>
                <p className="text-sm text-faint">
                  Or email{" "}
                  <a href={`mailto:${site.email}`} className="text-muted hover:text-accent">
                    {site.email}
                  </a>
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
