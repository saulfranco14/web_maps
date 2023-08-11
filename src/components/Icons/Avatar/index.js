import React from "react";
import Image from "next/image";

const Avatar = ({ src, alt }) => {
  return (
    <>
      <Image src={src} alt={alt} width={56} height={56} />
    </>
  );
};

export { Avatar };
