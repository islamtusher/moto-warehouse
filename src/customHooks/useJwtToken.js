import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const useJwtToken = (user) => {
    const [token, setToken] = useState('')
    // const [user] = useAuthState()

    useEffect(() => {
        const getJwtToken = async () => {
            console.log(user?.email);
            if (user?.email) {
                const { data } = await axios.post('https://mysterious-basin-75687.herokuapp.com/token', { email: user?.email })
                setToken(data?.accessToken)
                localStorage.setItem('accessToken', data?.accessToken)
                console.log(data);

            }
        }
        getJwtToken()
    }, [user])
    
    return [token]

}
export default useJwtToken;