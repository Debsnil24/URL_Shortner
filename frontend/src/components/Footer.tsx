"use client"
import { Icon } from "@iconify/react";
import Link from "next/link";
import Divider from "./divider";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  return (
    <div
      className=" flex-col flex-wrap items-center justify-between w-full px-12 py-4"
      style={{ color: "var(--text-secondary)" }}
    >
      <div className="flex gap-4 items-center justify-between w-full px-4">
        <h1
          className="font-jaro text-xl font-bold transition-colors cursor-pointer "
          style={{ color: "var(--text-primary)" }}
          onClick={() => router.push("/")}
        >
          SNIPLY
        </h1>
        <div className="flex gap-8 items-center justify-between ">
          <Link className="hover:underline hover:underline-offset-4" href="/">
            About
          </Link>
          <Link className="hover:underline hover:underline-offset-4" href="/">
            Features
          </Link>
          <Link className="hover:underline hover:underline-offset-4" href="/">
            Support
          </Link>
        </div>
        <div className="flex gap-4 items-center justify-between">
          <Link
            target="_blank"
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.linkedin.com/in/debsnil24samudra/"
          >
            <Icon icon="mdi:linkedin" className="w-5 h-5" />
          </Link>
          <Link
            target="_blank"
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://drive.google.com/file/d/1wJif25oy9YWxalOUUe5sfglah12sxjq2/view?usp=drivesdk"
          >
            <Icon icon="mdi:resume" className="w-5 h-5" />
          </Link>
          <Link
            target="_blank"
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://github.com/Debsnil24"
          >
            <Icon icon="mdi:github" className="w-5 h-5" />
          </Link>
        </div>
      </div>
      <div className="py-2">
        <Divider />
      </div>
      <div className="flex gap-4 items-center justify-between w-full px-4">
        <p className="text-gray-500 text-sm">
          © 2025 SNIPLY. All rights reserved.
        </p>
        <div className="flex gap-4 items-center justify-between text-sm">
          <Link className="hover:underline hover:underline-offset-4" href="/">
            Privacy Policy
          </Link>
          <Link className="hover:underline hover:underline-offset-4" href="/">
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
}
export function MobileFooter() {
  return (
    <div
      className=" flex-col flex-wrap items-center justify-between w-full px-4 py-4"
      style={{ color: "var(--text-secondary)" }}
    >
      <div className="py-2">
        <Divider />
      </div>
      <div className="flex gap-4 items-center justify-between w-full px-4">
        <div>
          <h1
            className="font-jaro text-xl font-bold transition-colors"
            style={{ color: "var(--text-primary)" }}
          >
            SNIPLY
          </h1>
        </div>

        <div className="flex gap-4 items-center justify-between">
          <Link
            target="_blank"
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.linkedin.com/in/debsnil24samudra/"
          >
            <Icon icon="mdi:linkedin" className="w-5 h-5" />
          </Link>
          <Link
            target="_blank"
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://drive.google.com/file/d/1wJif25oy9YWxalOUUe5sfglah12sxjq2/view?usp=drivesdk"
          >
            <Icon icon="mdi:resume" className="w-5 h-5" />
          </Link>
          <Link
            target="_blank"
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://github.com/Debsnil24"
          >
            <Icon icon="mdi:github" className="w-5 h-5" />
          </Link>
        </div>
      </div>
      {/* <div className="flex-col gap-4 items-center justify-center ">
        <Link className="hover:underline hover:underline-offset-4" href="/">
          About
        </Link>
        <Link className="hover:underline hover:underline-offset-4" href="/">
          Features
        </Link>
        <Link className="hover:underline hover:underline-offset-4" href="/">
          Support
        </Link>
      </div> */}

      <div className="flex gap-4 items-center justify-center w-full px-4 mt-4">
        <p className="text-gray-500 text-sm">
          © 2025 SNIPLY. All rights reserved.
        </p>
      </div>
      <div className="flex gap-4 items-center justify-center text-sm w-full">
        <Link className="hover:underline hover:underline-offset-4" href="/">
          Privacy Policy
        </Link>
        <Link className="hover:underline hover:underline-offset-4" href="/">
          Terms of Service
        </Link>
      </div>
    </div>
  );
}
