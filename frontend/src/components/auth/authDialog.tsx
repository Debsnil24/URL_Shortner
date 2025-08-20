"use client";

import { useStore } from "@/store/useStore";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@heroui/react";

export default function AuthDialog() {
  const { isAuthDialogOpen, setAuthDialogOpen } = useStore();

  return (
    <Modal
      isOpen={isAuthDialogOpen}
      onOpenChange={setAuthDialogOpen}
      size="md"
      placement="center"
      backdrop="transparent"
    >
      <ModalContent>
        <ModalHeader>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-white">Login</h1>
            <p className="text-sm text-gray-400">
              Login to your account to continue
            </p>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="flex flex-col gap-4">
            <Input
              type="email"
              placeholder="Email"
              className="bg-gray-700 border-gray-600 text-white"
            />
            <Input
              type="password"
              placeholder="Password"
              className="bg-gray-700 border-gray-600 text-white"
            />
            <Button
              color="primary"
              onPress={() => {
                console.log("Login pressed");
                setAuthDialogOpen(false);
              }}
            >
              Login
            </Button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
