// components/ui/Button.jsx
import React from "react";

export default function Button({ children, onClick, customClasses = "bg-violet-700 hover:bg-violet-600 text-white", customPadding = "py-3 px-6", customRounded = "rounded-lg" }) {
  return (
    <button
      onClick={onClick}
      className={`${customClasses} ${customPadding} ${customRounded} font-semibold transition duration-300`}
    >
      {children}
    </button>
  );
}