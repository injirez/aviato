import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Link } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ListOfOffers } from '../ListOfOffers'

export const MyOffers = ({open, onClose, onOpen}) => {
  const [adverts, setAdverts] = useState([]);
  async function fetchData() {
    const response = await fetch("http://127.0.0.1:8000/api/v1/advert/");
    const data = await response.json();
    setAdverts(data.response.filter((advert) => advert.seller.user.username === sessionStorage.getItem('user')));
  }
    const handleOnOpenMyOffers = () =>
  {
    fetchData();
    onOpen();
  }
  return (
    <>
    <Link component="button" variant="body2" onClick={handleOnOpenMyOffers}>Мои объявления</Link>
    <Dialog
          open={open}
          onClose={onClose}
          sx={{
            "& .MuiDialog-container": {
              "& .MuiPaper-root": {
                width: "100%",
                maxWidth: "1000px",  // Set your width here
              },
            },
          }}
      >
          <DialogTitle id="alert-dialog-title">{"Add offer"}</DialogTitle>
          <DialogContent sx={{ justifyContent: "center"}}>
              <Box paddingTop={'15px'}>
                <ListOfOffers adverts = {adverts} myOffers = {true} fetchData= {fetchData}/>
              </Box>
          </DialogContent>
          <DialogActions>
              <Button type="submit">Save</Button>
              <Button onClick={onClose} autoFocus>
                  Close
              </Button>
          </DialogActions>
      </Dialog>
   </>
  )
}
