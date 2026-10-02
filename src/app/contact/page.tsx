import type { Metadata } from "next";
import TypedHeading from "@/components/typed-heading";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | Black Labz",
  description: "Get in touch with Black Labz OÜ in Tallinn, Estonia.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 pt-20 pb-24">
      <div className="w-full max-w-xl flex flex-col gap-10">
        <TypedHeading text="Contact Us" />

        <div className="grid gap-6 sm:grid-cols-2 font-mono text-sm">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-white/40">&gt; email</span>
            <a
              href="mailto:Info@blacklabz.com"
              className="text-white/80 hover:text-white transition-colors"
            >
              Info@blacklabz.com
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-white/40">&gt; office</span>
            <address className="not-italic text-white/80 leading-relaxed">
              Black Labz OÜ
              <br />
              Hobujaama 4
              <br />
              10150 Tallinn
              <br />
              Estonia
            </address>
          </div>
        </div>

        <ContactForm />
      </div>
    </main>
  );
}
