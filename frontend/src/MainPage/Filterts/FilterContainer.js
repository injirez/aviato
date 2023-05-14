import React from 'react'
import { Filter } from './Filter'
import { Box } from '@mui/material'

export const FilterContainer = ({handlePriceMin, handlePriceMax, priceMin, priceMax, productType, setProductType, powerMin,
    powerMax, setPowerMin, setPowerMax}) => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width={200}
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      border={'1px solid grey'}
    >
      <Filter handlePriceMin = {handlePriceMin} handlePriceMax = {handlePriceMax} priceMin = {priceMin} priceMax = {priceMax} 
      productType = {productType} setProductType = {setProductType} powerMin = {powerMin} 
      powerMax = {powerMax} setPowerMin = {setPowerMin} setPowerMax = {setPowerMax}/>
    </Box>
  )
}
