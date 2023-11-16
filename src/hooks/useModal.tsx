import React, { useCallback, useState, ReactNode } from "react";
import { Modal as ModalComp } from "../component/Modal/Modal";

interface UseModalProps {
  children: ReactNode;
  showCloseIcon?: boolean;
  size?: "sm" | "md" | "lg";
}

interface UseModalReturn {
  showModal: () => void;
  Modal: React.FC<UseModalProps>;
}

export const useModal = (): UseModalReturn => {
  const [isShowing, setIsShowing] = useState(false);

  const showModal = () => setIsShowing(!isShowing);

  const Modal: React.FC<UseModalProps> = useCallback(
    ({ children, showCloseIcon, size }) => (
      <ModalComp
        open={isShowing}
        setOpen={showModal}
        showCloseIcon={showCloseIcon}
        size={size}
      >
        {children}
      </ModalComp>
    ),
    [isShowing, showModal]
  );

  return {
    showModal,
    Modal,
  };
};
