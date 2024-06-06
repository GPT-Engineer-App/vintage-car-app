import { Box, Container, Heading, Text, Image, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={6} align="start">
        <Heading as="h1" size="xl">About Veteran Cars</Heading>
        <Text fontSize="lg">
          Veteran cars, also known as antique or classic cars, are vehicles that were manufactured in the early 20th century. These cars are cherished by collectors and enthusiasts for their historical significance and unique designs.
        </Text>
        <Image src="/images/veteran-car.jpg" alt="Veteran Car" borderRadius="md" />
        <Text fontSize="md">
          Our mission is to celebrate and preserve the legacy of these magnificent vehicles. Join us as we explore the history, beauty, and engineering marvels of veteran cars.
        </Text>
      </VStack>
    </Container>
  );
};

export default About;