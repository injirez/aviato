import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@mui/material';
import React, { useState } from 'react'
import { OfferAddController } from '../../Authorization/core/OfferAddController';

export const AddOfferButton = () => {
  const [openProfile, setOpenProfile] = useState(false);

	const handleClickOpenProfile = () => {
	  setOpenProfile(true);
	};
  
	const handleCloseProfile = () => {
		setOpenProfile(false);
	};
  return (
    <div>
      <Button
				variant="primary"
				onClick={handleClickOpenProfile}
				style={{paddingRight: '5px', minWidth: 0}}
			>
				<FontAwesomeIcon icon={faPlus} fontSize="23px" />
        </Button>
        <OfferAddController open = {openProfile} onClose = {handleCloseProfile}/>
    </div>
  )
}
