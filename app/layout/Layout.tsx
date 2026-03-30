
import Sidebar from "./Sidebar"
import Header from "./Header"
import Footer from "./Footer"
import GlobalScript from "@/app/lib/GlobalScript"

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <GlobalScript />
            <Sidebar />
            <main className="dashboard-main">
                <Header />
                    {children}
                <Footer />
            </main>
        </>

    )
}