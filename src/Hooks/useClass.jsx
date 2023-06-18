import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useClass = () => {
    // const [popularClass, setPopularClass] = useState([]);
    // const [loading,setLoading] = useState(true);

    // useEffect(() =>{
    //     // fetch('popularClass.json')
    //     // fetch('https://ascension-music-institute-server-chowdhuryjoyanti.vercel.app/popularclass')
    //     // fetch('https://ascension-music-institute-server.vercel.app/popularclass')
       
    //     fetch('http://localhost:5000/popularclass')
    //     .then(res => res.json())
    //     .then(data =>  {
    //         setPopularClass(data)
    //         setLoading(false);
    //     })

            
    // },[])


    const {data:popularClass =[],isLoading:loading} = useQuery({
        queryKey: ['popularClass'],
        queryFn:async() => {
            const res = await fetch('https://ascension-music-institute-server.vercel.app/popularclass')
            return res.json();
        }
    })




    return [popularClass,loading]
}
export default useClass;