import NavBar from "./Navbar"
import Footer from "./Footer"

export default function Layout({children}) {
    return (
        <div className="layout">
            <NavBar/>
            {children}
            <Footer/>
        </div>
    )
}
