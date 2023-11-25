import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="border-t border-gray-300 p-2 text-xs mx-10 md:mx-24">
      <div className="flex justify-between items-center text-gray-800">
        <div>Copyright Creative Workers</div>
        <div className="flex items-center gap-2 divide-dotted">
          <div>
            <Link href="https://google.com" target="_blank">
              Privacy
            </Link>
          </div>
          <div>
            <Link href="https://google.com" target="_blank">
              Terms
            </Link>
          </div>
          <div>
            <Link href="https://google.com" target="_blank">
              Cookies
            </Link>
          </div>
          <div>
            <Link href="https://google.com" target="_blank">
              More
            </Link>
          </div>
        </div>
        <div>Kissmybutton &copy; 2017</div>
      </div>
    </div>
  );
};

export default Footer;
