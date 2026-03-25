"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { useContactPopup } from "@/components/providers/ContactPopupProvider";

type CTAButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function CTAButton({
  children,
  className = "",
  type = "button",
  ...props
}: CTAButtonProps) {
  const { openPopup } = useContactPopup();

  return (
    <button type={type} onClick={openPopup} className={className} {...props}>
      {children}
    </button>
  );
}
