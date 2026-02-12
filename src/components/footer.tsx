export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center py-3 px-6">
      <p className="text-[10px] md:text-xs text-white/30 tracking-wide text-center">
        Black Labz O&Uuml; &middot; Hobujaama 4 &middot; 10150 Tallinn &middot; Estonia &middot;{" "}
        <a href="mailto:Info@blacklabz.com" className="hover:text-white/60 transition-colors">
          Info@blacklabz.com
        </a>
      </p>
    </footer>
  );
}
