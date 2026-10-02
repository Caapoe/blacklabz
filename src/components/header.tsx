import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-12 px-6">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Black Labz"
          width={180}
          height={34}
          className="h-5 w-auto invert"
          priority
        />
      </Link>
      <nav className="font-mono text-xs text-white/50">
        <Link href="/contact" className="hover:text-white transition-colors">
          contact_
        </Link>
      </nav>
    </header>
  );
}
