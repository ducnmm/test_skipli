import React, { useState } from 'react';
import { Box, Button, Input, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const PhoneNumberForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const handleSendCode = async () => {
    try {
      const response = await fetch('http://localhost:5000/send-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber }),
      });

      if (response.ok) {
        navigate('/verify-code', { state: { phoneNumber } });
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.error('Error sending code:', error);
    }
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to Skipli AI</Text>
          <Input
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Button colorScheme="blue" onClick={handleSendCode}>
            Send Verification Code
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default PhoneNumberForm;