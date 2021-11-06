import Link from "next/link";

export default function NavBar() {
    return (
        

            <div className="navbar">
                <Link href="/"> 
                    <a className="logo">
                        <h1>JN</h1>
                    </a>
                </Link>

                <Link href="/" >
                    <a className="navbar-links">Home</a>
                </Link>

                <Link href="/about">
                    <a className="navbar-links">About Me</a>
                </Link>

                <Link href="https://jeans-journal.herokuapp.com/">
                    <a className="navbar-links" target="blank">Blog</a>
                </Link>
                
            </div>
            
            
            
        
    )
}
