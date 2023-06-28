import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import PlaneStats from './PlaneStats';

const ProductImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
});

export const OfferPage = () => {
    const { offer, isLoading, error } = useSelector((state) => state.offer);
    const offerParams = offer.response;
  return (
  <Box className="container_offer">
  <Box className="Name"> <Typography variant="h4" sx={{ mb: 2 }}>
          {offerParams.name}
        </Typography></Box>
  <Box className="Image"> <ProductImage src={'https://frontrangeflightschool.com/wp-content/uploads/2021/12/n4847g.jpg'} alt={offerParams.name} /></Box>
  <Box className="Toolbar"></Box>
  <Box className="Contacts"><Typography variant="h6" sx={{ mb: 2 }}>
          Seller Information:
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Name: {offerParams.seller.user.username}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Location: {offerParams.seller.user.email}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Phone: {offerParams.seller.phone}
        </Typography></Box>
  <Box className="Stats">
    <PlaneStats brand = {offerParams.product.brand} model = {offerParams.product.brand} 
    power = {offerParams.product.power} releaseDate = {offerParams.product.release_date} 
    type = {offerParams.product.type} image = {offerParams.images} description = {offerParams.description}/></Box>
</Box>
  )
}
