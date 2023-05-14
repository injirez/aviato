import { useState } from 'react';
import { Button, CircularProgress, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';

const UploadContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '16px',
});

function ImageUpload({uploadedImages, handleImageChange, handleImageUpload}) {


  return (
    <Container>
      <Typography variant="h6">Upload Images</Typography>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <Button variant="contained" onClick={handleImageUpload}>
        Upload
      </Button>
      {uploadedImages.map((image, index) => (
        <div key={index}>
          <img src={image.image} alt={`Uploaded ${index}`} />
        </div>
      ))}
    </Container>
  );
}

export default ImageUpload;