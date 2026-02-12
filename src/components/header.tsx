import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center h-12 px-6">
      <a href="/">
        <Image
          src="/logo.png"
          alt="Black Labz"
          width={180}
          height={34}
          className="h-5 w-auto invert"
          priority
        />
      </a>
    </header>
  );
}
