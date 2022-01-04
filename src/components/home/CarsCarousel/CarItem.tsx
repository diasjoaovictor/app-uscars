import { Box, Image, VStack, Text } from '@chakra-ui/react';

interface CarItemProps{
  carImage: string;
  key: number;
}

export function CarItem({ carImage, key }: CarItemProps){
  return(
    <Box flexDirection="row" key={key} pb={10} pl={2} >
        <VStack name="util_stack">
          <Image src={carImage} alt="carImage"/>
          <Text pb={[,,10]}>Text</Text>
        </VStack>
    </Box>
  )
}
