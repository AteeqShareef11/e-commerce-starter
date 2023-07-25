import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import Cat1 from '../../assets/cat1.webp';
import Cat2 from '../../assets/cat2.webp';
import Cat3 from '../../assets/cat3.webp';
import Cat4 from '../../assets/cat4.webp';

const ImageBox = ({ src }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const zoomedImageStyle = {
    width: '100%',
    transition: 'transform 0.8s ease',
    transform: isHovered ? 'scale(1.2)' : 'scale(1)',
  };

  return (
    <Box overflow="hidden">
      <img src={src} style={zoomedImageStyle} alt="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
    </Box>
  );
};

const HeroCat = () => {
  const imageList = [Cat1, Cat2, Cat3, Cat4];

  return (
    <Grid spacing={1} container>
      <Grid item xs={12} md={6}>
        <ImageBox src={imageList[0]} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid spacing={1} container>
          <Grid item xs={12} md={12}>
            <ImageBox src={imageList[2]} />
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageBox src={imageList[1]} />
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageBox src={imageList[3]} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeroCat;
