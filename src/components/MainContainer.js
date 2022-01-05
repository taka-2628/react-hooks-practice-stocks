import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [filterBy, setFilterBy] = useState("");
  const [stocksInPortfolio, setStocksInPortfolio] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((res) => res.json())
      .then((data) => setStocks(data))
  }, [])

  function handleFilterByType(type){
    setFilterBy(type)
  }

  function handleSortBy(sortBy){
    if (sortBy === "Alphabetically"){
      const sortedStock = [...stocks].sort((a,b)=> a.name < b.name ? -1: 1);
      setStocks(sortedStock);
    } else if (sortBy === "Price"){
      const sortedStock = [...stocks].sort((a,b)=> a.price < b.price ? -1: 1);
      setStocks(sortedStock);
    } 
  }
  
  const filteredStocks = (filterBy === "") ? stocks : stocks.filter((stock) =>  stock.type === filterBy)

  function handleAddStockToPortfolio(stockToAdd){
    setStocksInPortfolio([...stocksInPortfolio, stockToAdd])
  }

  function handleSellStock(stockToSell){
    setStocksInPortfolio(stocksInPortfolio.filter((stock) => stock.id !== stockToSell.id))
  }

  return (
    <div>
      <SearchBar onFilterBy={handleFilterByType} onSortBy={handleSortBy}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} onAddToPortfolio={handleAddStockToPortfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={stocksInPortfolio} onRemoveFromPortfolio={handleSellStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
