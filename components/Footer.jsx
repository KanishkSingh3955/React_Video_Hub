import { Box ,Button,Heading,HStack,Stack, VStack,Text} from '@chakra-ui/react'
import React from 'react'
import {AiOutLineSend} from "react-icons/ai"

const Footer = () => {
  return <Box bgColor={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}>
    <Stack direction={["column" ,"row"]}>
        <VStack w={"full"}>
            <Heading size="md" textTransform={"uppercase"} textAlign={["center","left"]} borderBottom={"2px solid"} m={"auto"} w={"fit-content"} colorScheme={"purple"}>
                Subscribe to get update .
            </Heading>
            
        </VStack>
        <VStack w={"full"} borderLeft={["none" ,"1px solid white"]}
        borderRight={["none" ,"1px solid white"]}>
            <Heading textTransform={"uppercase"} textAlign={"center"} colorScheme={"purple"}> Video Hub</Heading>
            <Text>All Rights Reserved .</Text>
        </VStack>
        <VStack w={"full"}>
            <Heading size={"md"} textTransform={"uppercase"} colorScheme={"purple"}>Social Media</Heading>
            <Button variant={"link"} colorScheme={"purple"}>
                < a href=''>Youtube</a>
            </Button>
            <Button variant={"link"} colorScheme={"purple"}>
                < a href=''>Instagram</a>
            </Button>
            <Button variant={"link"} colorScheme={"purple"}>
                < a href=''>Linkedin</a>
            </Button>
        </VStack>
    </Stack>
  </Box>
}

export default Footer;