"use client";

import React from "react";

interface AnnouncementBarProps {
  text?: string;
  className?: string;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  text = "Toda nuestra variedad, donde estés. ¡Compra online aquí!",
  className,
}) => {
  return (
    <div
      className={`w-full bg-blue-700 text-white text-xs sm:text-sm py-2 px-4 text-center font-medium ${className}`}
    >
      {text}
    </div>
  );
};
