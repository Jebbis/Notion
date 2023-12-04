"use client";

import { useEffect, useState } from "react";
import { SettingsModal } from "../modals/settings-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  //Use client still does some server side rendering and can cause hydration errors when using Dialogs
  //useEffect and if !isMounted prevents that error
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <SettingsModal />
    </>
  );
};
