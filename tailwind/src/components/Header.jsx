import { Logo, IconHamburger, IconClose } from "../svg";

function Li({ text }) {
  return (
    <li className="font-medium text-blue hover:text-gray-400">
      <a href="#">{text}</a>
    </li>
  );
}

function Header({ open, setOpen }) {
  return (
    <header className="container relative flex items-center justify-between pt-10 lg:pt-14">
      <div className="w-28 lg:w-36">
        <Logo />
      </div>
      <button
        className="z-50 h-6 w-6 lg:hidden"
        onClick={() => setOpen((val) => !val)}
      >
        {open ? <IconClose /> : <IconHamburger />}
      </button>
      <nav
        className={`${
          open ? "z-50 block" : "hidden"
        } absolute inset-x-6 top-24 rounded bg-white lg:static lg:block lg:bg-opacity-0`}
      >
        <ul className="m-10 flex flex-col gap-6 lg:m-0 lg:flex-row">
          <Li text="Pricing" />
          <Li text="Product" />
          <Li text="About Us" />
          <Li text="Careers" />
          <Li text="Community" />
        </ul>
      </nav>
      <button className="btn hidden bg-orange-800 text-white shadow-orange-600 hover:bg-orange-600 lg:block">
        Get Started
      </button>
    </header>
  );
}

export default Header;
