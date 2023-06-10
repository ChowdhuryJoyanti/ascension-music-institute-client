import { useEffect, useState } from "react";

const useClass = () => {
    const [popularClass, setPopularClass] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() =>{
        fetch('popularClass.json')
        .then(res => res.json())
        .then(data =>  {
            setPopularClass(data)
            setLoading(false);
        })
     
            
    },[])
    return [popularClass,loading]
}
export default useClass;