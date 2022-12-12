import Link from "next/link";

const Navbar = () =>{
    return(
        <>
        <div>
            <h1>Navbar</h1>
            <Link href="/about">  About </Link>
        </div>
        </>
    )
}

export default Navbar;