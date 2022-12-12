import Link from "next/link";

const Navbar = () =>{
    return(
        <>
        <div className="nav">
            <h1>Navbar</h1>
            <Link href="/about">  About </Link>
        </div>
        </>
    )
}

export default Navbar;