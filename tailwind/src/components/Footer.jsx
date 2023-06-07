import {
  IconFacebook,
  IconYouTube,
  IconTwitter,
  IconPinterest,
  IconInstagram,
  FooterLogo,
} from "../svg";

function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white">
      <div className="container grid gap-11 pb-24 pt-14 lg:grid-cols-[1fr,1.5fr,1.5fr] lg:pb-14">
        <div className="mx-auto flex gap-4 lg:col-[3] lg:w-full lg:flex-col lg:items-end lg:justify-between">
          <form className="flex gap-2">
            <div className="">
              <input
                className="h-full rounded-full px-5 text-sm"
                // {/* error : text-red */}
                type="text"
                placeholder="Update in your inbox..."
                required
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
    // <footer className="footer" id="footer">
    //   <div style="--px: 1.5rem" className="container grid">
    //     <div className="footer__form flex">
    //       <form className="flex" action="/">
    //         <div className="emailInput">
    //           <input
    //             type="email"
    //             name="email"
    //             placeholder="Updates in your inbox…"
    //             required
    //           />
    //           <div className="result">Please insert a valid Email</div>
    //         </div>
    //         <button className="btn btn--primary">Go</button>
    //       </form>
    //       <p className="footer__copy">Copyright 2020. All Rights Reserved</p>
    //     </div>

    //     <div className="footer__link-container flex">
    //       <ul className="footer__link-menu flex">
    //         <li className="footer__link">
    //           <a href="#">Home</a>
    //         </li>
    //         <li className="footer__link">
    //           <a href="#">Pricing</a>
    //         </li>
    //         <li className="footer__link">
    //           <a href="#">Products</a>
    //         </li>
    //         <li className="footer__link">
    //           <a href="#">About Us</a>
    //         </li>
    //       </ul>
    //       <ul className="footer__link-menu flex">
    //         <li className="footer__link">
    //           <a href="#">Careers</a>
    //         </li>
    //         <li className="footer__link">
    //           <a href="#">Community</a>
    //         </li>
    //         <li className="footer__link">
    //           <a href="#">Privacy Policy</a>
    //         </li>
    //       </ul>
    //     </div>

    //     <div className="footer__social-container flex">
    //       <div className="footer__icon-container flex">
    //         <a className="footer__icon" href="#">
    //           <svg>
    //             <use xlink:href="#icon-facebook"></use>
    //           </svg>
    //         </a>
    //         <a className="footer__icon" href="#">
    //           <svg>
    //             <use xlink:href="#icon-youtube"></use>
    //           </svg>
    //         </a>
    //         <a className="footer__icon" href="#">
    //           <svg>
    //             <use xlink:href="#icon-twitter"></use>
    //           </svg>
    //         </a>
    //         <a className="footer__icon" href="#">
    //           <svg>
    //             <use xlink:href="#icon-pinterest"></use>
    //           </svg>
    //         </a>
    //         <a className="footer__icon" href="#">
    //           <svg>
    //             <use xlink:href="#icon-instagram"></use>
    //           </svg>
    //         </a>
    //       </div>
    //       <div className="footer__logo">
    //         <svg>
    //           <use xlink:href="#footer-logo"></use>
    //         </svg>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
}

export default Footer;
