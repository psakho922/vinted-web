"use client";

export default function Button({ children, type = "button", onClick }) {

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
        fontSize: "14px"
      }}
    >

      {children}

    </button>

  );

}
