"use client";

import { useStore } from "@/store/useStore";
import CustomModal from "./customModal";

export default function PrivacyPolicy() {
  const { isPrivacyPolicyOpen, setIsPrivacyPolicyOpen } = useStore();
  return (
    <CustomModal size="lg" isOpen={isPrivacyPolicyOpen} onOpenChange={setIsPrivacyPolicyOpen}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row w-full justify-center items-center">
          <h1 className="text-2xl font-bold">Privacy Policy</h1>
        </div>
        <p>
          This is the privacy policy for the app. It will be updated in the future.
        </p>
      </div>
    </CustomModal>
  );
}