import { Text, useBreakpointValue, VStack} from '@chakra-ui/react';
import { useSidebarDrawer } from '../../../hooks/useSidebar';



export function ResponsiveMenuVersion(){
  const { onOpen } = useSidebarDrawer();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })




  return(


            <VStack spacing={10} >
              <Text color="white.200" >Menu</Text>
              <Text color="white.200" >Menu</Text>
              <Text color="white.200" >Menu</Text>
            </VStack>
  )
}
