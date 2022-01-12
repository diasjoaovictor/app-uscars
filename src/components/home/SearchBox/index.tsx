import { Flex, Input, InputGroup, InputRightElement} from '@chakra-ui/react';
import {  SearchIcon } from '@chakra-ui/icons';

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
        <InputGroup>
          <Input
            bgColor="gray.200"
            w="100%"
            borderRadius={0}
            border="none"
            placeholder="Search in US Cars Shop"
            color="black.900"
          />
          <InputRightElement >
            <SearchIcon  />
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Flex>
  )
}
