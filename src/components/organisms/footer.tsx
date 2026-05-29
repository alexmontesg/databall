import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="border-t px-4 md:px-24 py-6">
      <div className="flex flex-col md:flex-row place-content-between align-center min-w-full gap-6">
        <div className="flex items-center gap-6">
          <Image
            src="/cloud.webp"
            width={57}
            height={40}
            alt="Logo of Nimbus Cloud"
            loading="lazy"
          />
          <p className="text-muted-foreground">
            Nimbus Cloud monitoring system
          </p>
        </div>

        <div className="flex items-center">
          <p className="text-sm text-muted-foreground">
            © Alejandro Montes García
          </p>
        </div>
      </div>
    </footer>
  );
}
