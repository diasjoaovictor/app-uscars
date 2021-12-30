import { Box, HStack, Image, VStack, Text } from '@chakra-ui/react';

interface CarItemProps{
  carImage: string;
}

export function CarItem({ carImage }: CarItemProps){
  return(
    <>
    <Box flexDirection="row" pb={10} pl={2} >
        <VStack name="util_stack">
          <Image src={carImage}/>
          <Text pb={[,,10]}>Text</Text>
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
