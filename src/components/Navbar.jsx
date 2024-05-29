import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.800" px={4} py={2} color="white">
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold">Tech Forum</Text>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" mx={2}>Home</Link>
          <Link as={RouterLink} to="/categories" mx={2}>Categories</Link>
          <Link as={RouterLink} to="/about" mx={2}>About</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;