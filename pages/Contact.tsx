import React from 'react';
import { Box, Heading, Text, VStack, Input, Textarea, Button } from '@chakra-ui/react';

const Contact: React.FC = () => {
  return (
    <Box>
      <Heading as="h1" mb={4}>Contact Us</Heading>
      <Text mb={4}>Have questions or feedback? Get in touch with us!</Text>
      <VStack spacing={4} as="form" onSubmit={(e) => e.preventDefault()}>
        <Input placeholder="Your Name" />
        <Input placeholder="Your Email" type="email" />
        <Textarea placeholder="Your Message" />
        <Button type="submit" colorScheme="blue">Send Message</Button>
      </VStack>
    </Box>
  );
};

export default Contact;