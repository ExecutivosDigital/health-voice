"use client";
import { useSidebar } from "@/store";
import { Menu } from "lucide-react";
import Image from "next/image";

export function Header() {
  const { mobileMenu, setMobileMenu } = useSidebar();

  return (
    <header className="absolute top-0 left-1/2 flex w-full max-w-[1280px] -translate-x-1/2 items-center justify-between px-4 py-2 2xl:px-0 2xl:py-8">
      <Image
        src="/logos/logo.png"
        alt=""
        quality={100}
        width={1250}
        height={500}
        className="h-16 w-max object-contain"
      />
      <div className="flex items-center gap-2">
        <div className="hidden items-center gap-2 xl:flex">
          <button
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.executivos.healthvoice",
                "_blank",
              )
            }
            className="border-light text-light flex h-10 items-center gap-2 rounded-3xl border px-4 font-semibold"
          >
            <Image
              src="/icons/play-store.png"
              alt=""
              width={100}
              height={100}
              className="h-6 w-max object-contain"
            />
            Baixar Play Store
          </button>
          <button
            onClick={() =>
              window.open(
                "https://apps.apple.com/br/app/health-voice/id6754345791",
                "_blank",
              )
            }
            className="border-primary bg-primary text-light flex h-10 items-center gap-2 rounded-3xl border px-4 font-semibold"
          >
            <Image
              src="/icons/apple.png"
              alt=""
              width={100}
              height={100}
              className="h-6 w-max object-contain"
            />
            Baixar App Store
          </button>
        </div>
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="hover:bg-primary-100 hover:text-primary relative h-6 w-6 xl:hidden"
        >
          <Menu />
        </button>
      </div>
    </header>
  );
}
