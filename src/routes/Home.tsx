import {Box, Container, Flex, Heading, Text} from "@chakra-ui/react";
const Home = () => {
  return (
    <Flex maxW={'100%'}>
      <Container maxW={'container.lg'}>
        <Box borderWidth={'thin'} borderRadius={'.5rem'} padding={'1rem'} margin={'1rem'}>
          <Heading>
            Welcome to my Map Gallery!
          </Heading>
          <Text>
            Photos in this gallery contain geo-location information. <br />
            This images are dynamically placed on the map according to this information.
          </Text>
        </Box>
      </Container>
    </Flex>
  )
}



export default Home