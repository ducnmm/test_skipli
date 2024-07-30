import React, { useState } from 'react';
import { Box, Button, Heading, Input, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const GetInspired = () => {
  const [topic, setTopic] = useState('');
  const navigate = useNavigate();

  const handleGenerateIdeas = () => {
    // Implement idea generation logic here
    console.log('Generating ideas for:', topic);
    
    // Navigate to the generated ideas screen
    navigate('/ideas');
  };

  return (
    <Box display="flex" width="100vw" height="100vh" alignItems="center" justifyContent="center">
      <Sidebar currentPath={'/'} />
      <Box flex="1" padding="2rem" overflowY="auto">
        <VStack spacing={6} align="start" maxWidth="600px" margin="0 auto">
          <Heading>Get Inspired</Heading>
          <Text>
            Stuck staring at a blank page? Tell us what topic you have in mind and Skipli AI will generate a list of post ideas and captions for you.
          </Text>
          <Text fontWeight="bold">What topic do you want ideas for?</Text>
          <Input
            placeholder="Enter a topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <Button colorScheme="blue" onClick={handleGenerateIdeas}>
            Generate ideas
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default GetInspired;