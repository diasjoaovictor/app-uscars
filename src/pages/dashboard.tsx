import { Text, Image, Flex, HStack, Box, Stack as ContainerStack, Input, Icon, VStack } from '@chakra-ui/react';
import { Header } from '../components/Header/index';

import { Menu } from '../components/Menu';
import { SearchBox } from '../components/SearchBox';
import { Banner } from '../components/Banner';
import { CarsCarousel } from '../components/CarsCarousel';

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
