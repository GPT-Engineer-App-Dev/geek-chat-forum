import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const categories = [
  { title: "General Discussion", description: "Talk about anything tech-related." },
  { title: "Programming", description: "Discuss coding, algorithms, and best practices." },
  { title: "Hardware", description: "Share insights on the latest hardware and gadgets." },
  { title: "Networking", description: "Discuss networking technologies and solutions." },
  { title: "Security", description: "Talk about cybersecurity and best practices." },
];

const Categories = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Discussion Categories</Heading>
      <VStack spacing={4} align="stretch">
        {categories.map((category, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="md">
            <Heading size="md">{category.title}</Heading>
            <Text mt={2}>{category.description}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Categories;