import { Box, Icon, IconButton } from '@mui/material'
import React, {useEffect, useState} from 'react'
import { useMutation } from '@reduxjs/toolkit/query/react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useGetOfferQuery } from '../features/offer/offerGetApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { offerById } from '../features/offer/offerGetSplice';
import {useNavigate} from 'react-router-dom';
import { FavoritesButton } from '../Offers/FavoritesButton';
import { useAddFavMutation } from '../features/offer/addToFavApiSlice';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from '@emotion/styled';
import { useDeleteOfferMutation } from '../features/offer/offerDeleteApiSlice';
import { OfferAddController } from '../Authorization/core/OfferAddController';
const ProductImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
});
export const ListOfOffers = ({adverts, myOffers, fetchData}) => {
  const [openProfile, setOpenProfile] = useState(false);
  const { offer, error } = useSelector((state) => state.offer);
	const handleClickOpenProfile = async(offerId) => {
    await dispatch(offerById(offerId))
	  setOpenProfile(true);
	};
  
	const handleCloseProfile = () => {
		setOpenProfile(false);
	};
  const [addFav, { isLoading }] = useAddFavMutation()
  const [deleteOffer] = useDeleteOfferMutation()
  const [isAddedToFav, setAddedToFav] = useState(false)
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const handleDeleteOffer = async (offerId) => {
    await deleteOffer(offerId)
    fetchData()
   }
   useEffect(() => {
     if(adverts?.response?.favourites){
      setAddedToFav(true);
     }
   }, [])
   
   const showOfferOnClick = async (offerId) => {
     await dispatch(offerById(offerId))
    navigate('/offer')
   }
   const addToFav = async (offerId) => {
    setSelectedCardIndex(offerId)
    await addFav({
      idItem: offerId,
    });
   }
  return (
    <><Container>
      <Row xs={"1"} sm={"2"} md={"3"} lg={"4"}>
        {Object.values(adverts).map((item) => (
          <Col key={item.id}>
            <Card>
              {myOffers && <Box flexDirection={'row'} paddingLeft={'10px'}>
                <IconButton sx={{ width: '20px', height: '20px' }} onClick={() => handleClickOpenProfile(item.id)}><EditIcon sx={{ width: '20px', height: '20px' }} /></IconButton>
                <IconButton sx={{ width: '20px', height: '20px' }} onClick={() => handleDeleteOffer(item.id)}><DeleteIcon sx={{ width: '20px', height: '20px' }} /></IconButton>
              </Box>}
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Subtitle>{item.price + ' р'}</Card.Subtitle>
                <Card.Img src={'https://frontrangeflightschool.com/wp-content/uploads/2021/12/n4847g.jpg'}></Card.Img>
                {!myOffers && <Card.Text>
                  <strong>Тип:</strong> {item.product?.type}<br />
                  <strong>Бренд:</strong> {item.product?.brand}<br />
                  <strong>Модель:</strong> {item.product?.model}<br />
                  <strong>Дата выпуска:</strong> {item.product?.release_date}<br />
                  <strong>Мощность:</strong> {item.product?.power}<br />
                </Card.Text>}

                {!myOffers && <Box flexDirection={'row'}>
                  <FavoritesButton addToFav={() => addToFav(item.id)} isAdded={selectedCardIndex === item.id ? true : false} />
                  <Button style={{ marginLeft: "50px" }} variant="primary" onClick={() => showOfferOnClick(item.id)}>Посмотреть</Button>
                </Box>}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <OfferAddController open={openProfile} onClose={handleCloseProfile} offer = {offer}/>
    </>
  )
}
