import axios from "axios";

const BASE_URL ="https://api.wallex.ir/v1/currencies/stats"
const getCoin = async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
}

export {getCoin};