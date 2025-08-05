import { Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Footer() {
  return (
    <div
      className=" flex-col flex-wrap items-center justify-between w-full px-12 py-4"
      style={{ color: "var(--text-secondary)" }}
    >
      <div className="flex gap-4 items-center justify-between w-full px-4">
        <h1
          className="font-jaro text-xl font-bold transition-colors"
          style={{ color: "var(--text-primary)" }}
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
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="#"
          >
            <Icon icon="mdi:linkedin" className="w-5 h-5" />
          </Link>
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="#"
          >
            <Icon icon="mdi:resume" className="w-5 h-5" />
          </Link>
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="#"
          >
            <Icon icon="mdi:github" className="w-5 h-5" />
          </Link>
        </div>
          </div>
          <div className="py-2 text-gray-500">
              <Divider />
          </div>
      <div className="flex gap-4 items-center justify-between w-full px-4">
              <p className="text-gray-500 text-sm">© 2025 SNIPLY.  All rights reserved.</p>
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