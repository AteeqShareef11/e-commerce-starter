/* eslint-disable import/no-unresolved */
import { Box, Container } from '@mui/material';
import Slider from 'react-slick';
import SliderCard from 'src/src/Shared/SliderCard';
import SLiderImage from '../../assets/sliderImg.webp';

const ProductSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const item = {
    image: SLiderImage,
  };
  return (
    <Container sx={{ margin: 'auto !important' }} maxWidth="lg">
      <Box m={'auto'}>
        <Slider {...settings}>
          <div>
            <SliderCard item={item} />
          </div>
          <div>
            <SliderCard item={item} />
          </div>
          <div>
            <SliderCard item={item} />
          </div>
          <div>
            <SliderCard item={item} />
          </div>
          <div>
            <SliderCard item={item} />
          </div>
          <div>
            <SliderCard item={item} />
          </div>
          <div>
            <SliderCard item={item} />
          </div>
          <div>
            <SliderCard item={item} />
          </div>
          <div>
            <SliderCard item={item} />
          </div>
          <div>
            <SliderCard item={item} />
          </div>
          <div>
            <SliderCard item={item} />
          </div>
          <div>
            <SliderCard item={item} />
          </div>
        </Slider>
      </Box>
    </Container>
  );
};

export default ProductSlider;
