import { Container, Text, VStack, Heading, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6}>
        <Heading as="h1" size="2xl">Welcome to Veteran Cars</Heading>
        <Text fontSize="lg" textAlign="center">
          Discover the beauty and history of veteran cars. Explore our collection and learn more about these timeless classics.
        </Text>
        <Image src="/images/veteran-car-home.jpg" alt="Veteran Car" borderRadius="md" />
      </VStack>
    </Container>
  );
};

export default Index;