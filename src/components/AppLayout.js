import { Outlet } from "react-router-dom";
import Navigation from "./Navigation"

const AppLayout = () => {
  return (
    <main>
      <h1>Welcome to Blogs</h1>
      <div>
        <Outlet />
      </div>
    </main>
  )
}

export default AppLayout;