"use client";

import { useStore } from "@/store/useStore";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

export default function Home() {
  const { setAuthDialogOpen } = useStore();

  return (
    <div
      className="font-sans flex flex-col items-center justify-items-center h-[calc(100vh-150px)] md:h-[calc(100vh-90px)]"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <div className="flex flex-col gap-[32px] items-center sm:items-start mt-40 md:mt-60">
        <div className="relative">
          <Image
            src="/SNIPLY.svg"
            alt="Sniply Logo"
            width={150}
            height={150}
            className="invert-100"
          />
        </div>
        <div className="font-mono text-sm/6 text-center sm:text-left">
          <p
            className="mb-2 tracking-[-.01em]"
            style={{ color: "var(--text-primary)" }}
          >
            Smarter links for a faster web.
          </p>
          <p
            className="tracking-[-.01em]"
            style={{ color: "var(--text-secondary)" }}
          >
            Create a link, share it, and track your clicks.
          </p>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Button
            variant="bordered"
            radius="full"
            className="border-1 text-gray-300 font-light text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
          >
            Learn More
          </Button>
          <Button
            variant="solid"
            color="primary"
            onPress={() => setAuthDialogOpen(true)}
            radius="full"
            endContent={
              <Icon icon="mingcute:arrow-right-fill" className="mt-0.5" />
            }
            className=" text-white gap-2 font-light text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
