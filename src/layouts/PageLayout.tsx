import { Outlet } from "react-router";
import Header from "../components/Header";

export default function PageLayout() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <Outlet />
    </div>
  );
}
