import { Box, Image, VStack, Text } from '@chakra-ui/react';

interface CarItemProps{
  carImage: string;
  category: string
}

export function CarItem({ carImage, category }: CarItemProps){
  return(
    <Box flexDirection="row" pl={2} >
        <VStack  spacing="0px">
          <Image cursor="pointer" src={carImage} alt="carImage"/>
          <Text fontSize="2vh" cursor="pointer" pb={["100px",,10]}>{category}</Text>
        </VStack>
    </Box>
  )
}
