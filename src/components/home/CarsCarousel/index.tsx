import Carousel from "react-multi-carousel";
import { useState, useEffect, ReactNode } from 'react';

import { CarItem } from './CarItem';
import { Arrows } from './Arrows';

import convertible from '../../../../public/avatars/convertible.svg';
import coupe from '../../../../public/avatars/coupe.svg';
import electricHybrid from '../../../../public/avatars/electric-hybrid.svg';
import hatchback from '../../../../public/avatars/hatchback.svg';
import luxury from '../../../../public/avatars/luxury.svg';
import pickup from '../../../../public/avatars/pickup.svg';
import sedan from '../../../../public/avatars/sedan.svg';
import suv from '../../../../public/avatars/suv.svg';
import van from '../../../../public/avatars/van.svg';
import wagon from '../../../../public/avatars/wagon.svg';

import "react-multi-carousel/lib/styles.css";
import  styles from   './Home.module.css';


interface CarsProps{
  carItem: ReactNode;
}
export function CarsCarousel(){
    const [cars, setCars] = useState<CarsProps[]>([])
    useEffect(() => {

      let carsArray = [];
      // for(let i = 0; i < 12; i++) carsArray.push(<CarItem key={i} carImage={carAvatar.src}/>);
      carsArray.push(<CarItem category="Convertible" carImage={convertible.src}/>);
      carsArray.push(<CarItem category="Coupe" carImage={coupe.src}/>);
      carsArray.push(<CarItem category="Clectric-hybrid" carImage={electricHybrid.src}/>);
      carsArray.push(<CarItem category="Hatchback" carImage={hatchback.src}/>);
      carsArray.push(<CarItem category="Luxury" carImage={luxury.src}/>);
      carsArray.push(<CarItem category="Pickup" carImage={pickup.src}/>);
      carsArray.push(<CarItem category="Sedan" carImage={sedan.src}/>);
      carsArray.push(<CarItem category="Suv" carImage={suv.src}/>);
      carsArray.push(<CarItem category="Van" carImage={van.src}/>);
      carsArray.push(<CarItem category="Wagon" carImage={wagon.src}/>);
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
      items: 6
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
