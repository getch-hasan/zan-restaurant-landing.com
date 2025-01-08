import Foooter from "./Footer"
import Navbar from "./navbar"

export const LayoutPageWrapper = ({ children }) => {
    return (
        <div>
            <Navbar/>
            <main>{children}</main>
            <Foooter/>
        </div>
    )
}