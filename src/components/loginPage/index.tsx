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
  InputGroup,
  InputRightElement
} from '@chakra-ui/react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

import { Footer } from './Footer/index';

import blue_logo from '../../../public/blue_logo.png';

export function LoginPage(){
  const [type, setType] = useState('password')
  const [visible, setVisible] = useState(<ViewOffIcon />)
  const router = useRouter();
  useEffect(() => {
     document.body.style.backgroundColor = 'rgba(229, 229, 229, 0.5)';
  })
  const redirect = () => router.push('/');
  const changeVisibility = () => {
    if(type === 'password'){
      setType('text');
      setVisible(<ViewIcon h="40px" />);
    }else{
      setType('password');
      setVisible(<ViewOffIcon h="40px" />);
    }
    document.getElementById('txtPassowrd').focus();
  }
  return(
    <>
    <Stack
      w="100%"
      justifyContent="space-between"
      name=""
      h="100vh"
      >
      <Box
        >
        <BodyStack
          >
          <Box>
            <Center
              width="100%"
              h="80px"
              boxShadow="0px 2.5px 3px 1px rgba(0, 0, 0, 0.4)"
              borderBottom="10px"
              bgColor="#fff"
              >
              <Image pt={5} h="150%" alt="logo"  src={blue_logo.src} />
            </Center>
            <Center
              pt={30}
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
                      placeholder="Password: "
                      type={type}
                      id="txtPassowrd"
                      />
                        <InputRightElement
                          onClick={() => changeVisibility()}
                          cursor="pointer"
                        >
                          {visible}
                        </InputRightElement>
                    <Center
                      padding="1%"
                      >
                      <Text
                        color="#C3C3C3"
                        cursor="pointer"
                        fontFamily="Ubuntu"
                        >
                          Forgot password?

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
                            onClick={() => redirect()}
                            >
                            Login
                          </Button>
                          <VStack spacing={10}>
                            <HStack
                              spacing="35px"
                              >
                              <Divider
                                orientation='horizontal'
                                w="180px"
                                border="1px solid black !important"
                                color="#b2342a"
                                bgColor="#b2342a"
                              />
                              <Text
                                color="#c3c3c3"
                                fontSize="20px"
                                fontFamily="Ubuntu"
                                >
                                or
                              </Text>
                              <Divider
                                orientation='horizontal'
                                w="180px"
                                border="1px solid black !important"
                                color="#b2342a"
                                bgColor="#b2342a"
                              />
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

            <Footer />
          </Stack>
          </>
  )
}
