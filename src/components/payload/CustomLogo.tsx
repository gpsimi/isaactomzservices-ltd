import React from "react";
import Image from "next/image";

import Logo from "@/assets/logos/logo-light.png";

export const CustomLogo = () => {
  return (
    <div className="custom-logo w-auto h-10 relative">
      <Image
        src={Logo}
        alt="Isaac Tomz Services"
        width={300}
        height={50}
        className="object-contain w-auto h-full"
      />
    </div>
  );
};
