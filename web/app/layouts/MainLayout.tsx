import Header from "@/components/Header"
import { Outlet } from "react-router"
import { Toaster } from "sonner"

const MainLayout = () => {
  return (
    <div className="p-12 max-w-screen">
        <Header />
        <main>
            <Outlet />
            <Toaster />
        </main>
    </div>
  )
}

export default MainLayout
