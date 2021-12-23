import { Box} from '@chakra-ui/react';
import Carousel from "react-multi-carousel";
import { useState, useEffect, ReactNode } from 'react';

import { CarItem } from './CarItem';
import { Arrows } from './Arrows';

import carAvatar from '../../../public/car_avatar1.png';

import  styles from   './Home.module.css';

/*
*******************************************
1.  Os padding left do Box HStack deverão ser
  estilizados com CSS, pois ao configurar os mesmos
  usando o proprio chakra, enquanto a responsividade
  fica boa na full screen ( PC ) na tela do IPAD
  fica ruim, e quando é arrumando na tela do IPAD o
  contrário ocorre

2. dar um jeito de colocar o código do Home.module.css no theme.ts

*******************************************
*/
interface CarsProps{
  carItem: ReactNode;
}
export function CarsCarousel(){
    const [cars, setCars] = useState<CarsProps[]>([])
    useEffect(() => {
      let carsArray = [];
      for(let i = 0; i < 6; i++) carsArray.push(<CarItem carImage={carAvatar.src}/>);
      setCars(carsArray);

    }, [])


    const leftArrowClass="react-multiple-carousel__arrow react-multiple-carousel__arrow--left";
    const rightArrowClass="react-multiple-carousel__arrow react-multiple-carousel__arrow--right";

    const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



  return(
    <Box
      w="100%"

    >

        <Carousel
          className={styles.carouselContainer}
          responsive={responsive}
          draggable={true}
          showDots={true}
          infinite={false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all 0.6s"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          customLeftArrow={<Arrows onClick={() => this.onclick} classProps={leftArrowClass} />}
          customRightArrow={<Arrows onClick={() => this.onclick} classProps={rightArrowClass} />}

        >
        {cars.map(car => {
          return car
        })}
        </Carousel>

      </Box>

  )
}
