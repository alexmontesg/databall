import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b px-4 md:px-24 py-6">
      <div className="flex place-content-between min-w-full">
        <div className="flex items-center gap-6">
          <Image
            src="/logo.webp"
            width={40}
            height={40}
            alt="Logo of Databall"
            loading="eager"
          />
          <h1 className="text-2xl md:text-4xl font-black md:tracking-wider">
            Databall
          </h1>
        </div>
      </div>
    </header>
  );
}
