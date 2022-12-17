import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () =>{
    // const router = useRouter();
    // useEffect(() =>{
    //     setTimeout(() => {
    //         router.push('/');
    //     }, 3000); 
        
    // },[])
    return(
        <div className="container">
            <h1>404 not found;</h1>
            <p>we are redirecting you to the homepage.....</p>
        </div>
    )
}

export default NotFound;