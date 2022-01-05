import React from "react";
import Stock from "./Stock";

function StockContainer( { stocks, onAddToPortfolio } ) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => <Stock key={stock.id} stock={stock} onAddToPortfolio={onAddToPortfolio}/>)}
    </div>
  );
}

export default StockContainer;
