import Header from "@/components/Header"
import { Outlet } from "react-router"

const MainLayout = () => {
  return (
    <div className="p-12 max-w-screen">
        <Header />
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default MainLayout
