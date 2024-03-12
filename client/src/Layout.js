import Header from "./components/Header";
import { Outlet } from "react-router-dom";

// Component for the main layout of the application
export default function Layout() {
  // Render the header component and main content based on the current route
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}
