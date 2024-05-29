import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Spacer } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const categories = [
  { title: "General Discussion", description: "Talk about anything tech-related." },
  { title: "Programming", description: "Discuss coding, algorithms, and best practices." },
  { title: "Hardware", description: "Share insights on the latest hardware trends." },
  { title: "Software", description: "Discuss software development, tools, and frameworks." },
  { title: "Networking", description: "Talk about network setups, protocols, and security." },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} align="center">
        <Heading size="md">Tech Forum</Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link href="/">Home</Link>
          <Link href="#categories">Categories</Link>
          <Link href="#about">About</Link>
        </HStack>
      </Flex>

      {/* Main Section */}
      <Box as="main" p={4}>
        <Heading as="h2" size="xl" mb={6} textAlign="center">
          Discussion Categories
        </Heading>
        <VStack spacing={8} id="categories">
          {categories.map((category, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" w="full">
              <Heading fontSize="xl">{category.title}</Heading>
              <Text mt={4}>{category.description}</Text>
            </Box>
          ))}
        </VStack>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
          <Text>&copy; 2023 Tech Forum. All rights reserved.</Text>
          <HStack spacing={4}>
            <Link href="https://facebook.com" isExternal>
              <FaFacebook />
            </Link>
            <Link href="https://twitter.com" isExternal>
              <FaTwitter />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <FaLinkedin />
            </Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;