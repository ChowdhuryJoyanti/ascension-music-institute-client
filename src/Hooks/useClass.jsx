import { useEffect, useState } from "react";

const useClass = () => {
    const [popularClass, setPopularClass] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() =>{
        // fetch('popularClass.json')
        fetch('https://ascension-music-institute-server-chowdhuryjoyanti.vercel.app/popularclass')
        .then(res => res.json())
        .then(data =>  {
            setPopularClass(data)
            setLoading(false);
        })
     
            
    },[])
    return [popularClass,loading]
}
export default useClass;