import { Flex, Input, Icon } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';

export function SearchBox(){
  return(
    <Flex
      w="100%"
      justifyContent="center"
    >
      <Flex
      w="80%"
      justifyContent="space-between"
      as="label"
      bgColor="gray.200"
      position="relative"
      >
        <Input
          bgColor="gray.200"
          w="95%"
          borderRadius={0}
          border="none"
          placeholder="Search in US Cars Shop"
          color="black.900"
        />
        <Icon
          as={RiSearchLine}
          fontSize={20}
          mt={2}
          marginRight={[10, 15, 17]}
        />

      </Flex>

    </Flex>
  )
}
