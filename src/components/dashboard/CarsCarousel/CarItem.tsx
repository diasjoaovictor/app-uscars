import { Box, HStack, Image, VStack, Text } from '@chakra-ui/react';

interface CarItemProps{
  carImage: string;
  key: number
}

export function CarItem({ carImage, key }: CarItemProps){
  return(
    <>
    <Box flexDirection="row" pb={10} key={key} >
        <VStack >
        {
          key == 1
          ?
          <Image  src={carImage}/>
          :
          <Image pl={"20px"} src={carImage}/>
        }
          <Text pb={10}>Text</Text>
        </VStack>
    </Box>
    {/*
      <Box flexDirection="row" pl={[5, 10, 18, 20]} pb={[,,10]} >
      <HStack spacing={[5, 10, 18, 20]}>
      <VStack >
      <Image  src={carImage}/>
      <Text pb={10}>Text</Text>
      </VStack>
      <VStack >
      <Image  src={carImage}/>
      <Text pb={10}>Text</Text>
      </VStack>
      </HStack>
      </Box>

      */
    }
    </>
  )
}
