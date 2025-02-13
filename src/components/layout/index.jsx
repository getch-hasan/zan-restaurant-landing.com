import { useRouter } from "next/router";

import Navbar from "./navbar"
import Footer from "./Footer";

export const LayoutPageWrapper = ({ children }) => {
    const router = useRouter();
    const hiddenRoutes = ["/menu-card"];
    return (
        <div>
            {!hiddenRoutes.includes(router.pathname) && <Navbar />}
            <main>{children}</main>
            {!hiddenRoutes.includes(router.pathname) && <Footer />}
        </div>
    )
}