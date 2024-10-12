import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const About: React.FC = () => {
  return (
    <Box>
      <Heading as="h1" mb={4}>About Us</Heading>
      <Text>We are a modern web application built with React, TypeScript, and various other cutting-edge technologies.</Text>
    </Box>
  );
};

export default About;