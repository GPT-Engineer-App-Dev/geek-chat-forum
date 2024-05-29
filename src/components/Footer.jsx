import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="brand.800" color="white" py={4} mt={8}>
      <Flex direction="column" align="center">
        <Text mb={2}>Contact us: contact@techforum.com</Text>
        <Flex>
          <Link href="https://facebook.com" isExternal mx={2}>
            <FaFacebook />
          </Link>
          <Link href="https://twitter.com" isExternal mx={2}>
            <FaTwitter />
          </Link>
          <Link href="https://linkedin.com" isExternal mx={2}>
            <FaLinkedin />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;