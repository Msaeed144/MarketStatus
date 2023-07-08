import React , {useState , useEffect} from 'react';
import { getCoin  } from '../services/api';

const Landing = () => {
    const [coins , setCoins] = useState([])
    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin();
            setCoins(data.result)
            console.log(data)
        }
        fetchAPI()
    }, [])

    return (

        <div>
            <input type='text' placeholder='search...' />
            <div>
                {
                    coins.map(coin =>console.log(coin))
                }
            </div>
        </div>
    );
};

export default Landing;