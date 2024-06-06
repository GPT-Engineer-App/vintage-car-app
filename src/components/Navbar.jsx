import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="blue.800" color="white" px={4} py={2}>
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold">Veteran Cars</Text>
        <Spacer />
        <Link as={RouterLink} to="/" px={2} py={1} rounded="md" _hover={{ bg: "blue.700" }}>
          Home
        </Link>
        <Link as={RouterLink} to="/about" px={2} py={1} rounded="md" _hover={{ bg: "blue.700" }}>
          About
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;