import { useEffect, useState } from "react";

const useBikes = () => {
    const [bikes, setBikes] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/bikes')
        // fetch('bikes.json')
            .then(res => res.json())
            .then(data => setBikes(data))
        
    }, [bikes])
    return [bikes]
}
export default useBikes;