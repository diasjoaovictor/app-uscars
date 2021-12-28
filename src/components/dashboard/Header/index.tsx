import { useSidebarDrawer } from '../../../hooks/useSidebar';
import { Box, DrawerHeader, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Drawer, useBreakpointValue } from '@chakra-ui/react';
import { Menu } from '../Menu/index';
import { ResponsiveMenuVersion } from '../Menu/ResponsiveMenuVersion';

export function Header(){
  const { isOpen, onClose } = useSidebarDrawer();
  const isDrawSidebar = useBreakpointValue({
    base: false,
    lg: true
  })
  /********************************************/
  if(isDrawSidebar){
     return(
       <Menu />
    )
  }
  return(
    <>
    <Menu />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton color="white.200" mt="6"/>
            <DrawerHeader>chave</DrawerHeader>
            <DrawerBody>
            <ResponsiveMenuVersion />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}
