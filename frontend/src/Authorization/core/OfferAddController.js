import { Box, Button, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import React, { useEffect, useState } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { useGetProfileQuery } from "../../features/profile/profileGetApiSlice";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useAddOfferMutation } from "../../features/offer/offerAddApiSlice";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers-pro";
import { moment } from "moment";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { FormControl } from "@mui/material";
import ImageUpload from "../../Offers/ImageUpload";
import dayjs from 'dayjs';
import { useUpdateOfferMutation } from "../../features/offer/offerUpdateApiSlice";

export const OfferAddController = ({ open, onClose, offer }) => {
  const [updateOffer] = useUpdateOfferMutation();
  const [addOffer] = useAddOfferMutation();

  const [type, setType] = useState("plane");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [power, setPower] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  console.log(offer)
  useEffect(() => {
   if(open && offer)
   {
    setType(offer?.response.product?.type);
    setBrand(offer?.response.product?.brand);
    setModel(offer?.response.product?.model);
    setPower(offer?.response.product?.power);
    setName(offer?.response.name);
    setPrice(offer?.response.price);
    setDescription(offer?.response.description);
   }
  }, [open]);
const handleChangeDescription = (event) => {
  setDescription(event.target.value);
};
const [selectedImage, setSelectedImage] = useState(null);
const [uploadedImages, setUploadedImages] = useState([]);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };
  const currentDate = dayjs();
  const handleImageUpload = () => {
    if (selectedImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const uploadedImage = {
          image: reader.result,
        };
        setUploadedImages((prevImages) => [...prevImages, uploadedImage]);
      };
      reader.readAsDataURL(selectedImage);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        // let offer = {
        //     name: name,
        //     price: price,
        //     description: description,
        //     product:{
        //         type: type,
        //         brand: brand,
        //         model: model,
        //         power: power,
        //         release_date: releaseDate,
        //       }
        // }
        if (offer){
          const release_date = releaseDate.toISOString().slice(0, 10);
          const resourceId = offer.response.id;
          const updatedAd = {name,
            price,
            description,
            product:{
                type,
                brand,
                model,
                power,
                release_date,}
              } 
              updateOffer({resourceId, updatedAd});
        } else
      {
        const release_date = releaseDate.toISOString().slice(0, 10);
        addOffer({ name,
          price,
          description,
          product:{
              type,
              brand,
              model,
              power,
              release_date,
            } });}
           
    //   refetch();
    setType("");
    setSelectedImage("")
    setUploadedImages("")
    setBrand("");
    setModel("");
    setPower("");
    setReleaseDate("");
    setName("");
    setPrice("");
    setDescription("");
    onClose();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle id="alert-dialog-title">{"Add offer"}</DialogTitle>
        <DialogContent sx={{justifyContent:"center", minWidth:"500px"}} >
          <Box paddingTop={'15px'}>
            <Grid container spacing={2}  direction="column"
              alignItems="center"
              justifyContent="center">
              <Grid item xs={12} sm={12}>
              <FormControl>
              <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
              <Select
              label = {'Type'}
              sx={{width:'223px'}}
              value={type}
              onChange={(e) => setType(e.target.value)}
        >
          <MenuItem value={'helicopter'}>Helicopter</MenuItem>
          <MenuItem value={'glider'}>Hlider</MenuItem>
          <MenuItem value={'parts'}>Parts</MenuItem>
          <MenuItem value={'plane'}>Plane</MenuItem>
        </Select>
        </FormControl>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="Brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="Model"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="Power"
                  value={power}
                  onChange={(e) => setPower(e.target.value)}
                ></TextField>
              </Grid>
             <Grid item xs={12} sm={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker sx={{width:'223px'}} label="Release Date"
                  value={releaseDate}
                  format="YYYY-MM-DD"
                  onChange={(newValue) => setReleaseDate(newValue)}
                  disabledDate={(date) => date.isBefore(currentDate, 'day')}/>
                  
                </LocalizationProvider>
                </Grid>
                {/* <Grid item xs={12} sm={12}>
              <ImageUpload uploadedImages = {uploadedImages} handleImageChange = {handleImageChange} handleImageUpload = {handleImageUpload}/>
                </Grid> */}
                 <Grid item xs={12} sm={12}>
                <TextField
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></TextField>
                </Grid>
                <Grid item xs={12} sm={12}>
                <TextField
                  label="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                ></TextField>
                </Grid>
                <Grid item xs={12} sm={12}>
                <TextField
                sx={{width:'223px'}}
                  label="Description"
                  type="email"
                  multiline
                  defaultValue={description}
                  onInput={handleChangeDescription}
                  onKeyDown={(event) => {
                    event.stopPropagation();
                  }}
                />
                </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} type="submit">Save</Button>
          <Button onClick={onClose} autoFocus>
            Close
          </Button>
        </DialogActions>
    </Dialog>
  );
};
