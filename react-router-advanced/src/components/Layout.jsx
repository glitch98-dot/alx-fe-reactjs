import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="p-6">
      <nav className="flex gap-4 mb-6">
        <Link to="/" className="text-blue-600 hover:underline">Posts</Link>
        <Link to="/dashboard" className="text-blue-600 hover:underline">Dashboard</Link>
        <Link to="/profile/johndoe" className="text-blue-600 hover:underline">My Profile</Link>
      </nav>
      <Outlet />
    </div>
  );
}

