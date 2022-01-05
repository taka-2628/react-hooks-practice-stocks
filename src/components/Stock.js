import React from "react";

function Stock( { stock, onAddToPortfolio } ) {
  const { name, price } = stock;
  
  function handleAddClick(){
    onAddToPortfolio(stock)
  }
  
  return (
    <div>
      <div className="card" style={{ border: "1px solid black" }} onClick={handleAddClick} >
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
