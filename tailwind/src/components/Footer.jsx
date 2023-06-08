import { useEffect, useState } from "react";
import {
  IconFacebook,
  IconYouTube,
  IconTwitter,
  IconPinterest,
  IconInstagram,
  FooterLogo,
} from "../svg";

function Footer() {
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(true);
  useEffect(() => {
    if (!(email.match(/^\S+@\S+\.\S+$/) === null) || email === "") {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [email]);
  return (
    <footer className="relative bg-gray-900 text-white">
      <div className="container grid gap-11 pb-24 pt-14 lg:grid-cols-[1fr,1.5fr,1.5fr] lg:pb-14">
        <div className="mx-auto flex gap-4 lg:col-[3] lg:w-full lg:flex-col lg:items-end lg:justify-between">
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <div className="">
              <input
                className={`${
                  !valid && "text-red ring ring-red focus-visible:outline-none"
                } h-full rounded-full px-5 text-sm text-gray-900`}
                // {/* error : text-red */}
                type="text"
                placeholder="Update in your inbox..."
                required
                value={email}
                onInput={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <div className="invisible ml-5 mt-1 text-start text-[10px] italic">
                {/* error : text-red */}
                Please insert a valid Email
              </div>
            </div>
            <button className="btn bg-orange-800 hover:bg-orange-600">
              Go
            </button>
          </form>
          <p className="absolute bottom-8 left-1/2 w-max -translate-x-1/2 text-sm text-gray-400 lg:static lg:translate-x-0">
            Copyright 2020. All Rights Reserved
          </p>
        </div>

        <div className="flex justify-evenly text-left lg:col-[2] lg:row-[1] lg:w-full lg:justify-between">
          <ul className="flex flex-col gap-3">
            <li className="hover:text-orange-800">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-orange-800">
              <a href="#">Pricing</a>
            </li>
            <li className="hover:text-orange-800">
              <a href="#">Products</a>
            </li>
            <li className="hover:text-orange-800">
              <a href="#">About Us</a>
            </li>
          </ul>
          <ul className="flex flex-col gap-3">
            <li className="hover:text-orange-800">
              <a href="#">Careers</a>
            </li>
            <li className="hover:text-orange-800">
              <a href="#">Community</a>
            </li>
            <li className="hover:text-orange-800">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className="mx-auto flex flex-col gap-14 lg:col-[1] lg:row-[1] lg:w-full lg:flex-col-reverse lg:items-start lg:justify-between">
          <div className="flex items-center gap-5">
            <a className="w-6 hover:text-orange-800" href="#">
              <IconFacebook />
            </a>
            <a className="w-6 hover:text-orange-800" href="#">
              <IconYouTube />
            </a>
            <a className="w-6 hover:text-orange-800" href="#">
              <IconTwitter />
            </a>
            <a className="w-6 hover:text-orange-800" href="#">
              <IconPinterest />
            </a>
            <a className="w-6 hover:text-orange-800" href="#">
              <IconInstagram />
            </a>
          </div>
          <div className="mx-auto w-40 lg:mx-0">
            <FooterLogo />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
