const { default: Link } = require("next/link");

const Navbar = () => {
  return (
    <div>
      <ul className="flex justify-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/resume">Curriculum Vitae</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
