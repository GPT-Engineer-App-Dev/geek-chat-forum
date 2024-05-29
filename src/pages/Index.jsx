import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Spacer, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const categories = [
  { title: "General Discussion", description: "Talk about anything tech-related." },
  { title: "Programming", description: "Discuss coding, algorithms, and best practices." },
  { title: "Hardware", description: "Share insights on the latest hardware and gadgets." },
  { title: "Software", description: "Discuss software development, tools, and frameworks." },
  { title: "Networking", description: "Talk about networking technologies and trends." },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.700" color="white" p={4} align="center">
        <Heading size="md">Tech Forum</Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link href="/">Home</Link>
          <Link href="#categories">Categories</Link>
          <Link href="#about">About</Link>
        </HStack>
      </Flex>

      <Box as="main" p={4}>
        <Heading as="h2" size="xl" mb={6} textAlign="center">Discussion Categories</Heading>
        <VStack spacing={8} id="categories">
          {categories.map((category, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" w="100%">
              <Heading fontSize="xl">{category.title}</Heading>
              <Text mt={4}>{category.description}</Text>
            </Box>
          ))}
        </VStack>
      </Box>

      <Box as="footer" bg="gray.800" color="white" p={4} mt={10}>
        <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
          <Text>&copy; 2023 Tech Forum. All rights reserved.</Text>
          <HStack spacing={4}>
            <IconButton as="a" href="https://facebook.com" aria-label="Facebook" icon={<FaFacebook />} />
            <IconButton as="a" href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} />
            <IconButton as="a" href="https://linkedin.com" aria-label="LinkedIn" icon={<FaLinkedin />} />
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;