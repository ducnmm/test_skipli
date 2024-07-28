// src/components/FacebookPost.js
import React, { useState } from 'react';
import { Box, Button, Input, Select, Text, VStack, Heading, Textarea } from '@chakra-ui/react';
import Sidebar from './Sidebar';

const FacebookPost = () => {
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
    <Box display="flex" width="100vw" height="100vh" alignItems="center"
    justifyContent="center">
      <Sidebar />
      <Box flex="1" padding="2rem" overflowY="auto">
        <VStack spacing={6} align="start" maxWidth="600px" margin="0 auto">
          <Heading >Facebook post</Heading>
          
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
              <Heading as="h2" size="lg" my={4}>Captions generated for you</Heading>
              {generatedCaptions.map((caption, index) => (
                <Box key={index} borderWidth={1} borderRadius={8} p={4} mb={4}>
                  <Textarea value={caption} readOnly mb={2} />
                  <Button colorScheme="teal" size="sm" mr={2}>Share</Button>
                  <Button variant="outline" size="sm">Save</Button>
                </Box>
              ))}
            </Box>
          )}
        </VStack>
      </Box>
    </Box>
  );
};

export default FacebookPost;