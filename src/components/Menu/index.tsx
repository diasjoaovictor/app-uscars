import { Flex, HStack, Image, Text, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
import { useSidebarDrawer } from '../../hooks/useSidebar';

import logo from '../../../public/logo.svg';
import profile from '../../../public/profile.svg';
import exit from '../../../public/exit.svg';


export function Menu(){
  const { onOpen } = useSidebarDrawer();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })




  return(

    <Flex
      bgColor="blue.800"
      w="100%"
      h="100px"
      align="center"
    >
        <HStack
          w="90%"
          m="0 auto"
          justifyContent={"space-between"}
        >
            <HStack spacing={10} >

            { !isWideVersion && (
              <IconButton
              aria-label="Open navigation"
              icon={<Icon color="white.200" as={RiMenuLine} />}
              fontSize="24"
              variant="unstyled"
              onClick={onOpen}
              mr="2"
              >

              </IconButton>
            ) }
              <Image src={logo.src} alt="logo"/>
              {isWideVersion && (
                <>
                  <Text color="white.200" >Menu</Text>
                  <Text color="white.200" >Menu</Text>
                  <Text color="white.200" >Menu</Text>
                </>
              )}
            </HStack>
            <HStack spacing={10} >
              <Image src={profile.src} alt="logo"/>
              <Image src={exit.src} alt="logo"/>
            </HStack>
        </HStack >
    </Flex>
  )
}
