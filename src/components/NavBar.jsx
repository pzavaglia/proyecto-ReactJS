import CartWidget  from "./CartWidget";
import { Container, Flex, Spacer, Box, Heading, Center } from '@chakra-ui/react';

const NavBar = () => {
  return(
    <>
      <Container maxW="100rem" bg="blue.100" color="#262626">
        <Flex alignContent="Center" gap="2">
          <Box p="2" color="white">
          <Heading size="md">E-commerce</Heading>
          </Box>
          <Spacer/>
          <Box>
          <CartWidget/>          
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;