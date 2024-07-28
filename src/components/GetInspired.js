import React, { useState } from 'react';
import { Box, Button, Heading, Input, Text, VStack } from '@chakra-ui/react';
import Sidebar from './Sidebar';

const GetInspired = () => {
  const [topic, setTopic] = useState('');

  const handleGenerateIdeas = () => {
    // Implement idea generation logic here
    console.log('Generating ideas for:', topic);
  };

  return (
    <Box display="flex" width="100vw" height="100vh" alignItems="center"
    justifyContent="center">
      <Sidebar />
      <Box flex="1" padding="2rem" overflowY="auto">
        <VStack spacing={6} align="start" maxWidth="600px" margin="0 auto">
          <Heading>Get Inspried</Heading>
          <Text>
            Stick staring at a blank page? Tell us what topic you have in mind
            and Skipli AI will generate a list of post ideas and captions for you.
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