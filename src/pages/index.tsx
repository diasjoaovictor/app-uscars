import {  Stack as ContainerStack } from '@chakra-ui/react';
import { Header } from '../components/home/Header/index';

import { SearchBox } from '../components/home/SearchBox';
import { Banner } from '../components/home/Banner';
import { CarsCarousel } from '../components/home/CarsCarousel';

import 'react-multi-carousel/lib/styles.css';


export default function Dashboard(){


  return (
    <ContainerStack  spacing={10}>
      <Header />
      <SearchBox />
      <Banner />
      <CarsCarousel />
    </ContainerStack>
  )
}
