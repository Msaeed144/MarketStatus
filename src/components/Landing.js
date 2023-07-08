import React , {useState , useEffect} from 'react';
import { getCoin  } from '../services/api';
import Loader from './Loader';
import Coin from './Coin';
import styles from './Landing.module.css'

const Landing = () => {
    const [search , setSearch] = useState("")
    const [coins , setCoins] = useState([])
    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin();
            setCoins(data.result)
            console.log(data)
        }
        fetchAPI()
    }, [])
    const searchHandler = event => {
        setSearch(event.target.value)
    }
    const searchedCoins = coins.filter (coin =>coin.key.toLowerCase().includes(search.toLowerCase()) || coin.name.includes(search) || coin.name_en.toLowerCase().includes(search.toLowerCase()))
    return (

        <div>
            <input type='text' placeholder='search...' value={search} onChange={searchHandler} className={styles.input}/>
            {
                coins.length ?
                <div className={styles.container}>
                {
                    searchedCoins.map(coin => <Coin 
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