"use client";

import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export default function Button({
  children,
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        background: "#09b1ba",
        color: "white",
        padding: "12px 20px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: "14px",
        transition: "0.2s",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.background = "#078a92";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.background = "#09b1ba";
      }}
    >
      {children}
    </button>
  );
}
