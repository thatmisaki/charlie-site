import { Link } from "react-router";
import AffiliateTray from "./AffiliateTray";
import NavigationTray from "./NavigationTray";

export default function Header() {
  return (
    <header className="w-full px-8 py-5 border-4 border-gray-200 flex flex-row items-center justify-between gap-8">
      {/* Header Title */}
      <Link
        className="text-gray-200 text-3xl font-medium font-title text-nowrap grow text-center sm:grow-0"
        to="/"
      >
        Charlie Riback
      </Link>

      {/* Navigation Links */}
      <NavigationTray />

      {/* Affiliate Links */}
      <AffiliateTray />
    </header>
  );
}
