import Carousel from "react-multi-carousel";
import { useState, useEffect, ReactNode } from 'react';

import { CarItem } from './CarItem';
import { Arrows } from './Arrows';

import carAvatar from '../../../../public/car_avatar1.png';

import "react-multi-carousel/lib/styles.css";
import  styles from   './Home.module.css';


interface CarsProps{
  carItem: ReactNode;
}
export function CarsCarousel(){
    const [cars, setCars] = useState<CarsProps[]>([])
    useEffect(() => {
      let carsArray = [];
      for(let i = 0; i < 12; i++) carsArray.push(<CarItem key={`${i}`} carImage={carAvatar.src}/>);
      setCars(carsArray);

    }, [])

    const leftArrowClass="react-multiple-carousel__arrow react-multiple-carousel__arrow--left";
    const rightArrowClass="react-multiple-carousel__arrow react-multiple-carousel__arrow--right";

    const responsive = {

    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: cars.length
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 10
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 800, min: 20 },
      items: 2
    }
  };



  return(

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
          itemClass="carousel-item-padding-40-px"
          customLeftArrow={<Arrows onClick={() => this.onclick} classProps={leftArrowClass} />}
          customRightArrow={<Arrows onClick={() => this.onclick} classProps={rightArrowClass} />}
        >
        {cars.map(car => {
          return car
        })}
        </Carousel>


  )
}
