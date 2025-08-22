"use client";

import { useStore } from "@/store/useStore";
import CustomModal from "./customModal";

export default function TermsCondition() {
    const { isTermsOfServiceOpen, setIsTermsOfServiceOpen } = useStore();
  return <CustomModal size="lg" isOpen={isTermsOfServiceOpen} onOpenChange={setIsTermsOfServiceOpen}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row w-full justify-center items-center">
          <h1 className="text-2xl font-bold">Terms of Service</h1>
        </div>
      <p>
        This is the terms of service for the app. It will be updated in the future.
      </p>
    </div>
  </CustomModal>;
}