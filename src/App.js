import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Coin from "./components/Coin";

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setError(true);
      })
  });

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const searchedCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div>
      <Header />
      <form>
        <input type="text" placeholder="Search Coin" onChange={handleChange}></input>
      </form>
      <table class="table">
        <thead>
          <tr className="row">
            <th className="col">Coin</th>
            <th className="col">Symbol</th>
            <th className="col">Image</th>
            <th className="col">Price</th>
            <th className="col">24h</th>
            <th className="col" >Mkt Volume</th>
            <th className="col">Mkt Cap</th>
          </tr>
        </thead>
        <tbody>
          {!error? (<h1>Something Wrong ! Check back after sometime...</h1>)}
        </tbody>
      </table>
    </div>
  );
}

export default App;