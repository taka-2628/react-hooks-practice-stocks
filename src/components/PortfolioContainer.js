import React from "react";

function StockInPortfolio( { stock, onRemoveFromPortfolio } ){
  const { name, price } = stock;

  function handleRemoveClick(){
    onRemoveFromPortfolio(stock)
  }  

  return (
    <div>
      <div className="card" style={{ border: "1px solid black" }} onClick={handleRemoveClick} >
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}

function PortfolioContainer( { stocks, onRemoveFromPortfolio } ) {


  return (
    <div>
      <h2>My Portfolio</h2>
      {stocks.map((stock) => <StockInPortfolio key={stock.id} stock={stock} onRemoveFromPortfolio={onRemoveFromPortfolio}/> )}
    </div>
  );
}

export default PortfolioContainer;
