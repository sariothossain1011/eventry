
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {

  return (
    <Link href="/">
      <Image src="/logo.svg" alt="Eventry" width={135} height={135} />
    </Link>
  );
};

export default Logo;
