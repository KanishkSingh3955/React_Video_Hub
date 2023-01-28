import React from 'react'
import {Box, Heading, Img, Stack ,Image ,Text} from "@chakra-ui/react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/background.jpg"
import img5 from"../assets/5.png"
import { Carousel } from 'react-responsive-carousel';

import { Container } from '@chakra-ui/react'
const headingOption ={
   pos:"absolute",
   left:"50%",
   top:"50%",
   transform:"translate(-50% ,-50%)",
   size:"4xl"
}
const Home = () => {
  return <>
  <Box>
    <MyCarousel/>
    <Container maxW={"container.xl"} minH={"100vh"} p="16">
    <Heading textTransform={"uppercase"} py={"2"} w={"fit-content"} borderBottom={"2px solid"} m={"auto"}>Services</Heading>
    <Stack h={"full"} p={"4"} alignItems={"center"} direction={['column' ,'row']}>
      <Image  src={img5}  h= {["40" ,"400"]}filter={"hue-rotate(-130deg)"}/>
     <Text p={["4" ,"16"]} letterSpacing={"widest"} lineHeight={"190%"} textAlign={"center"}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Eius ipsam assumenda itaque minima minus commodi accusantium dicta?
       Repudiandae totam dolore eveniet impedit voluptas veritatis odio vitae aliquid nobis minus,
       fugit voluptate sed pariatur repellendus eum ad maiores officia aliquam! Minima quae praesentium
        at delectus nisi incidunt provident consectetur quaerat eum.
     </Text>
    </Stack>
    </Container>
  </Box>
  </>
};
const MyCarousel =()=>{
    return <Carousel  autoPlay infiniteLoop showStatus={false} interval={1000} showArrows={false} showThumbs={false}>
        <Box w="full" h="100vh" >
            <img src={img1}  filter={"huw-rotate(-130deg)"}/>
            <Heading  bgGradient='linear(to-l, #7928CA, #FF0080)'
                    bgClip='text'
                    fontSize='6xl'
                    fontWeight='extrabold' {...headingOption}>Beautiful nature</Heading>
        </Box>
        <Box w={"full"} h="100vh">
            <img src='https://images.unsplash.com/photo-1672730487998-d27c932b3a6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
            <Heading  colorScheme="blackAlpha"  {...headingOption}>Beautiful nature</Heading>
        </Box>
        <Box w={"full"} h="100vh">
            <img src='https://images.unsplash.com/photo-1663289234374-03a20d95683b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
            <Heading  colorScheme="blackAlpha"  {...headingOption}>Beautiful nature</Heading>
        </Box>
    </Carousel>
}


export default Home;

