import { Link } from "react-router";

export default function NavigationTray() {
  return (
    <nav className="flex-row gap-3 hidden lg:flex">
      <Link
        className="text-gray-200 text-md font-title text-nowrap hover:underline underline-offset-6"
        to="/"
        replace
      >
        Home
      </Link>
      <Link
        className="text-gray-200 text-md font-title text-nowrap hover:underline underline-offset-6"
        to="/illustration"
        replace
      >
        Illustration
      </Link>
      <Link
        className="text-gray-200 text-md font-title text-nowrap hover:underline underline-offset-6"
        to="/fan-art"
        replace
      >
        Fan Art
      </Link>
      <Link
        className="text-gray-200 text-md font-title text-nowrap hover:underline underline-offset-6"
        to="/concept-art"
        replace
      >
        Concept Art
      </Link>
      <Link
        className="text-gray-200 text-md font-title text-nowrap hover:underline underline-offset-6"
        to="/about"
        replace
      >
        About
      </Link>
    </nav>
  );
}
