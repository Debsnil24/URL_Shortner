"use client";

import { useStore } from "@/store/useStore";
import CustomModal from "./customModal";

export default function Support() {
  const { isSupportOpen, setIsSupportOpen } = useStore();
  return <CustomModal size="lg" isOpen={isSupportOpen} onOpenChange={setIsSupportOpen}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row w-full justify-center items-center">
          <h1 className="text-2xl font-bold">Support</h1>
        </div>
        <p>
          This is the support for the app. It will be updated in the future.
        </p>
    </div>
  </CustomModal>;
}