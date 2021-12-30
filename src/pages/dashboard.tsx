import { Text, Image, Flex, Center, HStack, Box, Stack as ContainerStack, Input, Icon, VStack } from '@chakra-ui/react';
import { Header } from '../components/dashboard/Header/index';

import { Menu } from '../components/dashboard/Menu';
import { SearchBox } from '../components/dashboard/SearchBox';
import { Banner } from '../components/dashboard/Banner';
import { CarsCarousel } from '../components/dashboard/CarsCarousel';

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
