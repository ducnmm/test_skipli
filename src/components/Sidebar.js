// src/components/Sidebar.js
import React from 'react';
import { Box, VStack, Text, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Box
      width="250px"
      height="100vh"
      backgroundColor="gray.100"
      padding="2rem"
    >
      <VStack spacing={4} align="start">
        <Text fontSize="2xl" fontWeight="bold">Skipli AI</Text>
        <Link as={RouterLink} to="/services" fontSize="lg">Services</Link>
        <Link as={RouterLink} to="/profile" fontSize="lg">Profile</Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;