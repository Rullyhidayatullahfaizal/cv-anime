
import Link from "next/link";
import Searchinput from "./searhinput";
import ActionButton from "./actionbutton";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-2 ">
      <div className="container mx-auto flex md:flex-row flex-col justify-between items-center gap-2">
        {/* Brand/logo */}
        <div className="text-white font-bold text-xl">
          <Link href="/">Cv Anime list </Link>
        </div>

        {/* Navigation links */}
        <ul className="Daftarnav flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <ActionButton></ActionButton>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <Searchinput></Searchinput>
      </div>
    </nav>
  );
};

export default Navbar;
