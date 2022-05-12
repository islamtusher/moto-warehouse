import { useEffect, useState } from "react";

const useBikes = () => {
    const [bikes, setBikes] = useState([])
    useEffect(() => {
        fetch('https://mysterious-basin-75687.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setBikes(data))
        
    }, [bikes])
    return [bikes]
}
export default useBikes;