import React, { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import { CardGroup, Col, Row } from "react-bootstrap";
import { ListOfOffers } from "./ListOfOffers";
import { FilterContainer } from "./Filterts/FilterContainer";
import { Box } from "@mui/material";

export const HomePage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [priceMin, setPriceMin] = useState('')
  const [priceMax, setPriceMax] = useState('')
  const [powerMin, setPowerMin] = useState('')
  const [powerMax, setPowerMax] = useState('')
  const [productType, setProductType] = useState('')
  const [adverts, setAdverts] = useState([]);
  async function fetchData() {
    const response = await fetch(`http://127.0.0.1:8000/api/v1/advert/?name=${searchValue}&price_min=${priceMin}&price_max=${priceMax}&product_type=${productType}&product_power_min=${powerMin}&product_power_max=${powerMax}`);
    const data = await response.json();
    setAdverts(data.response);
  }
  const handleSearch = (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };
  const handlePriceMin = (event) => {
    event.preventDefault();
    setPriceMin(event.target.value);
  };
  const handlePriceMax = (event) => {
    event.preventDefault();
    setPriceMax(event.target.value);
  };
  useEffect(() => {
    fetchData();
  }, [searchValue, productType, priceMax, priceMin, powerMax, powerMin]);


  return (
    <>
        
     <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <FilterContainer handlePriceMin = {handlePriceMin} handlePriceMax = {handlePriceMax} priceMin = {priceMin} 
      priceMax = {priceMax} productType = {productType} setProductType = {setProductType} powerMin = {powerMin} 
      powerMax = {powerMax} setPowerMin = {setPowerMin} setPowerMax = {setPowerMax}/>
     
    </Box>
    <Box paddingLeft={'200px'}>
      <SearchBar handleSearch = {handleSearch} searchValue = {searchValue}/>
      <CardGroup>
            <ListOfOffers adverts = {adverts}/>
      </CardGroup>
      </Box>
      
    </>
  );
};
