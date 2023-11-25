import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-full h-64 relative">
      <Image
        src="/bg-image.avif"
        layout="fill"
        className="object-cover"
        alt="background image of header"
      />
      <div className="hidden md:block absolute -bottom-4 left-14 border-2 border-gray-900">
        <Image
          src="/user-image.png"
          width={150}
          height={150}
          alt="user profile image"
        />
      </div>

      <div className="flex md:hidden  justify-center z-[999] absolute left-[30%]  -bottom-4 border-2 border-gray-900">
        <Image
          src="/user-image.png"
          width={150}
          height={150}
          alt="user profile image"
        />
      </div>
    </div>
  );
};

export default Header;
