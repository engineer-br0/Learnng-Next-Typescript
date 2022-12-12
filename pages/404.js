import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () =>{
    const router = useRouter();
    useEffect(() =>{
        setTimeout(() => {
            router.push('/');
        }, 3000); 
        
    },[])
    return(
        <div>
            HII im not found page.
        </div>
    )
}

export default NotFound;