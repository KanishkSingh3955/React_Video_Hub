import React from 'react'
import {
    Avatar,
    Button,
    Container,
    Heading,
    Input,
    Text,
    VStack,
  } from '@chakra-ui/react';

  import { Link } from 'react-router-dom';

const login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form>
          <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={['full', '96']}
            m={'auto'}
            my={'16'}
          >
            <Heading textAlign={"center"}>Welcome Back</Heading>
            <Avatar alignSelf={'center'} boxSize={'32'} />
  
          
            <Input
              placeholder={'Email'}
              type={'email'}
              required
              focusBorderColor={'purple.500'}
            />
            <Input
              placeholder={'Password'}
              type={'password'}
              required
              focusBorderColor={'purple.500'}
            />
  
            <Button colorScheme={'purple'} type={'submit'}>
              Sign Up
            </Button>
  
            <Text textAlign={'right'}>
              New User?{' '}
              <Button variant={'link'} colorScheme={'purple'}>
                <Link to={'/signup'}>Sign Up</Link>
              </Button>
            </Text>
          </VStack>
        </form>
      </Container>
  )
}

export default login