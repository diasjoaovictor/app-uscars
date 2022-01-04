import { Flex, Box, Text } from '@chakra-ui/react';
import car from '../../../../public/car.png';

export function Banner(){
  return( 
    <Flex
      w="100%"
      h={["100px", "150px", "250px", "300px","500px"]}
      justifyContent="center"
    >
      <Box
        w="85%"
        h="100%"
        bgColor="#b2342a"
        bg={`url("${car.src}")`}
        justifyContent="center"
        bgSize="100%"
        maxW="2000px"
        maxH="100%"
        backgroundRepeat="no-repeat"

      >
        <Text
          position="relative"
          color="#fff"
          textAlign="center"
          top={["30px", "60px", "90px", "150px", "250px"]}
          width="100%"
          fontSize={["20px", "40px", "50px", "60px", "80px"]}
        >Welcome to Us Car Shop</Text>
        <Text
          position="relative"
          color="#fff"
          textAlign="center"
          top={["30px", "55px", "90px", "150px", "250px"]}
          width="100%"
          fontSize={["20px", "25px", "30px", "40px"]}
        >How can we help you today?</Text>

      </Box>
    </Flex >
  )
}
