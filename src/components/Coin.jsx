import React from "react";


function Coin({id, name, symbol, image, price, marketCap, marketVolume, priceChange}){
    return(
        <div>
            <h1>{name}</h1>
            <p>{id}</p>
            <p>{symbol}</p>
            <img src={image} alt="cryptoCoin"></img>
            <p>${price}</p>
            <p>
                {priceChange<0 ? 
                (<p>{priceChange.toFixed(2)}%</p>):
                (<p>{priceChange.toFixed(2)}%</p>)
            }
            </p>
            <p>${marketCap}</p>
            <p>${marketVolume.toLocaleString()}</p>
        </div>
    )
}

export default Coin;