import React , {useState , useEffect} from 'react';
import { getCoin  } from '../services/api';
import Loader from './Loader';
import Coin from './Coin';

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
            {
                coins.length ?
                <div>
                {
                    coins.map(coin => <Coin 
                        key = {coin.key}
                        ename = {coin.key}
                        name = {coin.name}
                        price = {coin.price}
                        changesin24h = {coin.percent_change_24h}
                        topPrice = {coin.daily_high_price}
                        />)
                }
              </div> :
              <Loader />
            }
     
        </div>
    );
};

export default Landing;