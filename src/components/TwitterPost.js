import React, { useState } from 'react';
import { Box, Button, Input, Select, Text, VStack, Heading, Grid, GridItem } from '@chakra-ui/react';
import Sidebar from './Sidebar';

const TwitterPost = () => {
  const [topic, setTopic] = useState('');
  const [captionTone, setCaptionTone] = useState('');
  const [generatedCaptions, setGeneratedCaptions] = useState([]);

  const handleGenerateCaption = () => {
    // Giả lập việc tạo caption (trong thực tế, đây sẽ là một API call)
    const newCaptions = [
      `Introducing Skipli AI - the smarter, faster way to craft compelling content! Experience all the magic of AI-driven writing assistance and get great results with fewer headaches. #AI #ContentMarketing #Content`,
      `Say goodbye to writer's block! #SkipliAI is now available to make creating attention-grabbing content easier than ever! Get ready to take your social media game to the next level with #AI #SocialMedia`
    ];
    setGeneratedCaptions(newCaptions);
  };

  return (
    <Box display="flex" width="100vw" height="100vh">
      <Sidebar currentPath={'/'}/>
      <Box flex="1" padding="2rem" overflowY="auto" height="100vh">
        <VStack spacing={6} align="start" maxWidth="600px" margin="0 auto">
          <Heading>Twitter post</Heading>
          
          <Text>What topic do you want a caption for?</Text>
          <Input
            placeholder="Skipli is launching SkipliAI"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          
          <Text>What should your caption sound like?</Text>
          <Select
            placeholder="Select tone"
            value={captionTone}
            onChange={(e) => setCaptionTone(e.target.value)}
          >
            <option value="friendly">Friendly</option>
            <option value="professional">Professional</option>
            <option value="witty">Witty</option>
          </Select>
          
          <Button colorScheme="blue" onClick={handleGenerateCaption}>
            Generate caption
          </Button>

          {generatedCaptions.length > 0 && (
            <Box width="100%">
              <Heading as="h2" size="md" my={4}>Captions generated for you</Heading>
              <VStack spacing={4} align="stretch">
                {generatedCaptions.map((caption, index) => (
                  <Box key={index} borderWidth={1} borderRadius={8} p={4} mb={4}>
                    <Text mb={4}>{caption}</Text>
                    <Box display="flex" justifyContent="space-between">
                      <Button colorScheme="teal">Share</Button>
                      <Button variant="outline">Save</Button>
                    </Box>
                  </Box>
                ))}
              </VStack>
            </Box>
          )}
        </VStack>
      </Box>
    </Box>
  );
};

export default TwitterPost;