"use client";

export default function Button({
  children,
  type = "button",
  onClick
}: {
  children: any;
  type?: "button" | "submit";
  onClick?: any;
}) {

  return (

    <button
      type={type}
      onClick={onClick}
      style={{
        background: "#2ecc71",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "bold"
      }}
    >
      {children}
    </button>

  );

}
