"use client";

import { Modal, ModalBody, ModalContent, ModalHeader } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
}

export default function CustomModal({
  children,
  isOpen,
  onOpenChange,
  size,
}: ModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size={size}
      placement="center"
      backdrop="transparent"
      className="glass-effect"
      hideCloseButton
    >
      <ModalContent>
        <ModalHeader>
          <div className="flex flex-row gap-2 items-center justify-between w-full">
            <Image
              src="/SNIPLY.svg"
              alt="Sniply Logo"
              width={45}
              height={45}
              className="invert-100"
            />
            <Icon
              icon="mdi:close"
              className="w-5 h-5 cursor-pointer"
              onClick={() => onOpenChange(false)}
            />
          </div>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
}
