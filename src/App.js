import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Coin from "./components/Coin";
import "./global.css"

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);


  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  });

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const searchedCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  
  const handleNext = ()=>{
      setPage(page+1);
  }

  const handlePrevious = ()=>{
      setPage(page-1);
  }


  return (
    <div>
      <Header />
      <div className="container-fluid">
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-xs-4 form">
              <input type="text" placeholder="Search Coin" onChange={handleChange} className="form-control input"></input>
            </div>
          </div>
        </form>
      </div>
      <div className="table-responsive tableDiv">
        <table className="table">
          <thead>
            <tr className="rowHead">
              <th scope="col">Image</th>
              <th scope="col">Coin</th>
              <th scope="col">Symbol</th>
              <th scope="col">Price</th>
              <th scope="col">24h</th>
              <th scope="col" >Mkt Volume</th>
              <th scope="col">Mkt Cap</th>
            </tr>
          </thead>
          <tbody>
            {searchedCoins.map((coin) => {
              return (
                <Coin name={coin.name} symbol={coin.symbol} image={coin.image} price={coin.current_price} priceChange={coin.price_change_percentage_24h} volume={coin.total_volume} marketCap={coin.market_cap} />
              )
            })}
          </tbody>
        </table>

        <div className="buttons">
        <button type="button" className="btn btn-secondary" onClick={handlePrevious}>Previous</button>
        <button type="button" className="btn btn-primary" onClick={handleNext}>Next</button>
        </div>

      </div>
    </div>
  );
}

export default App;