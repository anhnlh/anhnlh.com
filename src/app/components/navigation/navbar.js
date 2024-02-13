import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex py-8 text-2xl">
      <Link href="/" className="flex-none font-black ml-11">
        anhnlh
      </Link>
      <div className="grow mr-11">
        <ul className="justify-center hidden lg:flex">
          <li className="mx-6">
            <Link href="/" className="p-2 text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li className="mx-6">
            <Link
              href="/#projects"
              className="p-2 text-white hover:text-gray-300"
            >
              Projects
            </Link>
          </li>
          <li className="mx-6">
            <Link href="/cv" className="p-2 text-white hover:text-gray-300">
              Curriculum Vitae
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
