import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoSymbol } from "../../../assets/images/symbol.svg";
import SiteMap from "./SiteMap";
import SocialNav from "./SocialNav";

function Footer() {
  return (
    <footer className="bg-[#232629] text-white py-8">
      <div className="container flex justify-between">
        <Link to="/">
          <LogoSymbol />
        </Link>
        <SiteMap />
        <div className="flex flex-col justify-between ml-16">
          <SocialNav />
          <p className="text-left text-xs text-gray-400">
            Site design / logo © 2023 Stack Exchange Inc; user contributions
            <br />
            licensed under CC BY-SA. rev 2023.2.17.43248
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
