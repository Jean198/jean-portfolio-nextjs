import NavBar from "./NavBar"
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
