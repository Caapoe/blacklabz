import type { Metadata } from "next";
import Link from "next/link";
import TypedHeading from "@/components/typed-heading";

export const metadata: Metadata = {
  title: "Privacy Policy | Black Labz",
  description: "How Black Labz OÜ handles personal data on blacklabz.com.",
};

const LAST_UPDATED = "2 October 2026";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="font-mono text-base sm:text-lg font-bold text-white">
        &gt; {title}
      </h2>
      <div className="flex flex-col gap-3 text-sm leading-relaxed text-white/70">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-6 pt-24 pb-24">
      <div className="mx-auto w-full max-w-2xl flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <TypedHeading text="Privacy Policy" />
          <p className="font-mono text-xs text-white/40">
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        <Section title="Who we are">
          <p>
            This website, blacklabz.com, is operated by Black Labz OÜ, a private
            limited company registered in Estonia (the &ldquo;Company&rdquo;,
            &ldquo;we&rdquo;, &ldquo;us&rdquo;). We are the data controller for
            personal data processed through this website.
          </p>
          <ul className="list-none font-mono text-xs sm:text-sm text-white/80 border border-white/15 p-4 flex flex-col gap-1">
            <li>Black Labz OÜ</li>
            <li>Hobujaama 4</li>
            <li>10150 Tallinn</li>
            <li>Estonia</li>
            <li>
              <a
                href="mailto:Info@blacklabz.com"
                className="hover:text-white transition-colors"
              >
                Info@blacklabz.com
              </a>
            </li>
          </ul>
        </Section>

        <Section title="What data we process">
          <p>
            This website is a simple informational site. It does not require
            you to create an account and does not use advertising or tracking
            cookies. We process the following limited categories of data:
          </p>
          <ul className="list-disc pl-5 flex flex-col gap-2">
            <li>
              <span className="text-white">Contact details you send us.</span>{" "}
              If you email us, or use the form on our{" "}
              <Link href="/contact" className="underline hover:text-white">
                Contact Us
              </Link>{" "}
              page (which opens your own email client), we receive your name,
              email address and the contents of your message.
            </li>
            <li>
              <span className="text-white">Technical log data.</span> Our
              hosting provider automatically records standard server logs when
              you visit, such as your IP address, browser type, requested pages
              and timestamps. This is needed to deliver the site securely and
              to detect abuse.
            </li>
          </ul>
        </Section>

        <Section title="Why we process it and on what legal basis">
          <ul className="list-disc pl-5 flex flex-col gap-2">
            <li>
              <span className="text-white">Responding to enquiries</span> &mdash;
              to answer your message and, where relevant, to prepare a proposal
              or agreement. Legal basis: our legitimate interest in responding
              to people who contact us, and, where applicable, taking steps
              prior to entering into a contract (GDPR Art. 6(1)(f) and
              6(1)(b)).
            </li>
            <li>
              <span className="text-white">Operating and securing the site</span>{" "}
              &mdash; to keep the website available, performant and protected
              from misuse. Legal basis: our legitimate interest in running a
              secure website (GDPR Art. 6(1)(f)).
            </li>
            <li>
              <span className="text-white">Legal obligations</span> &mdash; to
              comply with accounting, tax or other legal requirements where
              they apply. Legal basis: compliance with a legal obligation
              (GDPR Art. 6(1)(c)).
            </li>
          </ul>
        </Section>

        <Section title="Hosting and service providers">
          <p>
            The website is hosted on Vercel Inc. (United States). Vercel
            processes technical log data on our behalf and may transfer it
            outside the European Economic Area. Such transfers are covered by
            the European Commission&rsquo;s Standard Contractual Clauses and
            Vercel&rsquo;s data processing terms. We do not sell personal data
            and we do not share it with third parties for their own marketing.
          </p>
        </Section>

        <Section title="How long we keep data">
          <ul className="list-disc pl-5 flex flex-col gap-2">
            <li>
              Email correspondence is kept for as long as needed to handle your
              enquiry and any resulting business relationship, and then for up
              to three years in case of follow-up questions, unless a longer
              retention period is required by law.
            </li>
            <li>
              Server logs are retained by our hosting provider for a short,
              rolling period in line with their standard log retention.
            </li>
          </ul>
        </Section>

        <Section title="Cookies">
          <p>
            This website does not set analytics, advertising or tracking
            cookies. Only strictly necessary technical storage required to
            serve the site may be used, which does not require your consent.
          </p>
        </Section>

        <Section title="Your rights">
          <p>
            Under the General Data Protection Regulation (GDPR) you have the
            right to:
          </p>
          <ul className="list-disc pl-5 flex flex-col gap-1">
            <li>access the personal data we hold about you;</li>
            <li>have inaccurate data corrected;</li>
            <li>have your data erased where there is no good reason to keep it;</li>
            <li>restrict or object to processing based on legitimate interest;</li>
            <li>receive your data in a portable format where applicable;</li>
            <li>withdraw any consent you have given, at any time.</li>
          </ul>
          <p>
            To exercise any of these rights, email us at{" "}
            <a
              href="mailto:Info@blacklabz.com"
              className="underline hover:text-white"
            >
              Info@blacklabz.com
            </a>
            . You also have the right to lodge a complaint with the Estonian
            Data Protection Inspectorate (Andmekaitse Inspektsioon,{" "}
            <a
              href="https://www.aki.ee"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              www.aki.ee
            </a>
            ) or with the supervisory authority in your country of residence.
          </p>
        </Section>

        <Section title="Children">
          <p>
            This website is not directed at children under 16 and we do not
            knowingly collect personal data from them.
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p>
            We may update this policy from time to time. The current version
            is always published on this page, with the date of the last update
            shown at the top.
          </p>
        </Section>

        <p className="font-mono text-xs text-white/30">
          Questions? Reach us via the{" "}
          <Link href="/contact" className="underline hover:text-white/60">
            Contact Us
          </Link>{" "}
          page.
        </p>
      </div>
    </main>
  );
}
