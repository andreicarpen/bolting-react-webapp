import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Link } from '@chakra-ui/react';

const Navigation: React.FC = () => {
  return (
    <Box as="nav" aria-label="Main navigation" mb={8}>
      <Flex as="ul" listStyleType="none" p={0} justifyContent="space-around">
        <li>
          <Link as={RouterLink} to="/" aria-current="page">Home</Link>
        </li>
        <li>
          <Link as={RouterLink} to="/about">About</Link>
        </li>
        <li>
          <Link as={RouterLink} to="/contact">Contact</Link>
        </li>
      </Flex>
    </Box>
  );
};

export default Navigation;