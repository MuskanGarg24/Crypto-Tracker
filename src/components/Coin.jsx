import React from "react";
import "../global.css";

function Coin({ name, symbol, image, price, priceChange, volume, marketCap }) {
    return (
        <tr className="rowsize">
            <td><img src={image} alt="coinImage" className="image"></img></td>
            <td>{name}</td>
            <td>{symbol}</td>
            <td>${price}</td>
            {priceChange > 0 ? (<td className="green">{priceChange.toFixed(2)}%</td>) : (<td className="red">{priceChange.toFixed(2)}%</td>)}
            <td>${volume.toLocaleString()}</td>
            <td>${marketCap.toLocaleString()}</td>
        </tr>
    )
}

export default Coin;