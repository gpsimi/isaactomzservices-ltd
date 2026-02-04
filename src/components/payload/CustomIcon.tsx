import React from "react";
import Image from "next/image";

import Icon from "@/assets/logos/icon.png";

export const CustomIcon = () => {
  return (
    <div className="custom-icon w-auto h-10 relative">
      <Image
        src={Icon}
        alt="Isaac Tomz Services"
        width={50}
        height={50}
        className="object-contain w-auto h-full"
      />
    </div>
  );
};
