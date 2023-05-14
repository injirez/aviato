import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSolidHeart } from "@fortawesome/free-regular-svg-icons";
import {IconButton } from '@mui/material';

export const FavoritesButton = ({addToFav, isAdded}) => {
  return (
    <IconButton onClick={addToFav} variant="primary"><FontAwesomeIcon style = {{color: isAdded ? '#df1111' : 'none'}} icon={faHeart} fontSize="23px"/></IconButton>
  )
}