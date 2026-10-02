import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 flex flex-col items-center gap-1 py-3 px-6 bg-gradient-to-t from-black via-black/90 to-transparent">
      <p className="text-[10px] md:text-xs text-white/30 tracking-wide text-center">
        Black Labz O&Uuml; &middot; Hobujaama 4 &middot; 10150 Tallinn &middot; Estonia &middot;{" "}
        <a href="mailto:Info@blacklabz.com" className="hover:text-white/60 transition-colors">
          Info@blacklabz.com
        </a>
      </p>
      <nav className="text-[10px] md:text-xs text-white/30 tracking-wide flex gap-4">
        <Link href="/contact" className="hover:text-white/60 transition-colors">
          Contact Us
        </Link>
        <Link href="/privacy" className="hover:text-white/60 transition-colors">
          Privacy Policy
        </Link>
      </nav>
    </footer>
  );
}
