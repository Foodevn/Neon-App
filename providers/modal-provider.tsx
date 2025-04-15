"use client";

import { useEffect, useState } from "react";

import { RenameModal } from "@/components/modals/rename-modal";
import { useRenameModal } from "@/store/use-rename-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { isOpen } = useRenameModal();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  if (!isOpen) {
    return null;
  }
  return <RenameModal />;
};
