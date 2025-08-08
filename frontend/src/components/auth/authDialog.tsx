import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/modal";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/state/store";
import { closeAuthDialog } from "@/state/authDialogSlice";

export default function AuthDialog() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.authDialog.isOpen);

  return (
    <Modal isOpen={isOpen}>
      <ModalContent>
        <ModalHeader>
          <h2>Login</h2>
        </ModalHeader>
      </ModalContent>
    </Modal>
  );
}