import { Flex, Stack, Input, Button } from '@chakra-ui/react';
import router from 'next/router';

export default function Sigin(){

  const redirect = () => {
    router.push('/dashboard');
  }
  return(
    <Flex
      width="100vm"
      h="100vh"
      align="center"
      justify="center"

    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        p="8"
        borderRadius={8}
        flexDir="column"
      >
      <Stack spacing="4">
        <Input
         name="txtEmail"
         label="E-mail"
         type="email"
          />
        <Input
         name="txtSenha"
         label="Senha"
         type="password"
         />
      </Stack>

      <Button
       mt="6"
       colorScheme="pink"
       size="lg"
       onClick={() => redirect()}
       >Ir para Dashboard</Button>
      </Flex>


    </Flex>
  )
}
