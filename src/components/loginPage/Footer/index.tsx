import { AiOutlineCopyright } from "react-icons/ai";
import { Box, Text, Center, Icon } from '@chakra-ui/react';

export function Footer(){
  const y = new Date()
  //--> fazer div maior para centralizar a div menor dentro dela para nao ficar bugado
  return(
    <Center
    >
      <Box
        marginTop="100px"
        position="relative"
        bottom="0"
        w="90%"
        h="100px"
        name="divMaior"
      >
        <Box
          w="100%"
          backgroundColor="blue.800"
          p="10px"
          display="flex"
          justifyContent="center"

        >

          <Text
            color="white"
            fontFamily="Ubuntu"
            fontWeight="bold"
          >
          Copyright
           <Icon
            mx={2}
            mb={-1}
            w="20px"
            h="20px"
            as={AiOutlineCopyright}
          />
            {y.getFullYear} USCarsShop
          </Text>

        </Box>

      </Box>
    </Center>
  )
}
