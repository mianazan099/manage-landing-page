import { useState } from "react";
import { Logo, IconHamburger, IconClose } from "./svg";

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`${
        open
          ? "overflow-hidden before:absolute before:inset-x-0 before:z-10 before:h-[100vmax] before:bg-[linear-gradient(transparent,hsl(233,12%,13%))] before:opacity-60"
          : "overflow-x-hidden"
      } relative h-screen text-center font-serif text-gray-400`}
    >
      <header className="relative mt-[clamp(2.5rem,calc(2rem+2.15vw),3.5rem)]">
        <div className="container flex items-center justify-between">
          <div className="w-[clamp(6.88rem,calc(5.68rem+5.1vw),9.25rem)]">
            <Logo />
          </div>
          <button
            className="z-50 aspect-square h-6 lg:hidden"
            onClick={() => setOpen((p) => !p)}
          >
            {!open ? <IconHamburger /> : <IconClose />}
          </button>
          <nav
            className={`${
              open ? "z-50 block" : "hidden"
            } absolute inset-x-6 top-[calc(100%+clamp(2.5rem,calc(2rem+2.15vw),3.5rem))] rounded bg-white lg:static lg:block lg:bg-[transparent]`}
          >
            <ul className="m-10 flex flex-col gap-6 lg:m-0 lg:flex-row">
              <li className="font-medium text-blue hover:text-gray-400">
                <a href="#">Pricing</a>
              </li>
              <li className="font-medium text-blue hover:text-gray-400">
                <a href="#">Product</a>
              </li>
              <li className="font-medium text-blue hover:text-gray-400">
                <a href="#">About Us</a>
              </li>
              <li className="font-medium text-blue hover:text-gray-400">
                <a href="#">Careers</a>
              </li>
              <li className="font-medium text-blue hover:text-gray-400">
                <a href="#">Community</a>
              </li>
            </ul>
          </nav>
          <button className="btn hidden bg-orange-800 text-white shadow-orange-600 hover:bg-orange-600 lg:block">
            Get Started
          </button>
        </div>
      </header>
      <h1>HI</h1>
      <h1>HI</h1>
      <h1>HI</h1>
      <h1>HI</h1>
      <h1>HI</h1>
      <h1>HI</h1>
      <h1>HI</h1>
      <h1>HI</h1>
      <h1>HI</h1>
      <h1>HI</h1>
      <h1>HI</h1>
      <h1>HI</h1>
      <h1>HI</h1>
      <h1>HI</h1>
      <h1>HI</h1>
      <h1>HI</h1>
    </div>
    // <header class='header'>
    //   <div style="--px: 1.5rem" flex">
    //     <div >
    //       <svg>
    //         <use xlink:href="#logo"></use>
    //       </svg>
    //     </div>
    //     <button btn">
    //       <svg>
    //         <use xlink:href="#icon-hamburger"></use>
    //       </svg>
    //     </button>
    //     <nav >
    //       <ul flex">
    //         <li >
    //           <a  href="#">
    //             Pricing
    //           </a>
    //         </li>
    //         <li >
    //           <a  href="#">
    //             Product
    //           </a>
    //         </li>
    //         <li >
    //           <a  href="#">
    //             About Us
    //           </a>
    //         </li>
    //         <li >
    //           <a  href="#">
    //             Careers
    //           </a>
    //         </li>
    //         <li >
    //           <a  href="#">
    //             Community
    //           </a>
    //         </li>
    //       </ul>
    //     </nav>
    //     <button btn btn--primary">Get Started</button>
    //   </div>
    // </header>
  );
}
