import { Box } from '@mui/material';
import Slider from 'react-slick';
import Hero1 from '../../assets/hero1.webp';
import Hero2 from '../../assets/hero2.webp';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    fade: true,
  };
  return (
    <Box overflow={'hidden'}>
      <Slider {...settings}>
        <div>
          <img width={'100%'} src={Hero1} alt="" />
        </div>
        <div>
          <img width={'100%'} src={Hero2} alt="" />
        </div>
      </Slider>
    </Box>
  );
};

export default Hero;
