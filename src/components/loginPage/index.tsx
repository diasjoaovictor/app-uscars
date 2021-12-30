import { Image,
  Icon,
  Stack,
  Center,
  Button,
  HStack,
  Divider,
  Box,
  Stack as BodyStack,
  VStack,
  Text,
  Input,
  InputGroup
} from '@chakra-ui/react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import blue_logo from '../../../public/blue_logo.png';

export function LoginPage(){
  return(
    <Stack
      bgColor="rgba(229, 229, 229, 0.5) "
      w="100%"
      spacing={1}
      h={["100vh"]}
      >
      <Box
        >
        <BodyStack
          >
          <Box>
            <Center
              width="100%"
              h="100px"
              boxShadow="0px 2.5px 3px 1px rgba(0, 0, 0, 0.4)"
              borderBottom="10px"
              bgColor="#fff"
              >
              <Image pt={5} src={blue_logo.src} />
            </Center>
            <Center
              pt={40}
              >
              <Box
                w="500px"
                h="600px"
                bgColor="#fff"
                boxShadow="2px 4px 4px rgba(0, 0, 0, 0.25)"
                padding="50px"
                >
                <VStack>
                  <VStack
                    bgColor="#fff"
                    h="100%"
                    w="100%"
                    spacing={39}

                    >
                    <Input
                      variant="flushed"
                      _placeholder={{
                        color: "#C3C3C3",
                        fontWeight: "100"
                      }}
                      fontFamily="Ubuntu"
                      borderColor="#262626"
                      fontSize={30}
                      borderBottom="1px"
                      placeholder="Email: "/>
                    <InputGroup
                      flexDirection="column"
                    >
                    <Input
                      fontFamily="Ubuntu"
                      variant="flushed"
                      _placeholder={{
                        color: "#C3C3C3",
                        fontWeight: "2 !important"
                      }}
                      fontWeight="2"
                      borderColor="#262626"
                      fontSize={30}
                      placeholder="Senha: "/>
                    <Center
                      padding="0%"
                      >
                      <Text
                        color="#C3C3C3"
                        cursor="pointer"
                        fontFamily="Ubuntu"
                        >
                        Esqueceu a senha?

                          </Text>
                          </Center>
                          </InputGroup>
                          <Button
                            colorScheme='blue.800'
                            variant='outline'
                            w="60%"
                            border="3px solid"
                            fontSize="20"
                            fontWeight="10px"
                            boxShadow="2px 4px 4px rgba(0, 0, 0, 0.25)"
                            fontFamily="Ubuntu"
                            >
                            Login
                          </Button>
                          <VStack spacing={10}>
                            <HStack
                              spacing="35px"
                              >
                              <Divider orientation='horizontal' w="180px" border="1px solid black !important"  color="#b2342a" bgColor="#b2342a" />
                              <Text
                                color="#c3c3c3"
                                fontSize="20px"
                                fontFamily="Ubuntu"
                                >
                                ou
                              </Text>
                              <Divider orientation='horizontal' w="180px" border="1px solid black !important"  color="#b2342a" bgColor="#b2342a" />
                            </HStack>
                            <Button
                              colorScheme="red"
                              leftIcon={
                                <Icon
                                  as={AiFillGoogleCircle}
                                  fontSize={35}
                                  />
                                  }
                                  w="70%"
                                  h="45px"
                                  >
                                  <Text
                                    fontWeight="100"
                                    fontFamily="Ubuntu"
                                    >
                                    Login with google
                                  </Text>
                            </Button>
                          </VStack>
                        </VStack>
                      </VStack>
                    </Box>
                  </Center>
                </Box>

              </BodyStack>
            </Box>

          </Stack>
  )
}
