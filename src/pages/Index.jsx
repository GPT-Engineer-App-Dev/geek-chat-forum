import { Container, Text, VStack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to Tech Forum</Text>
          <Text>Join the discussion and share your knowledge with the community.</Text>
        </VStack>
      </Container>
      <Footer />
    </>
  );
};

export default Index;