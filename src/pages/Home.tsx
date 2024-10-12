import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Heading as="h1" mb={4}>{t('welcome')}</Heading>
      <Text>This is the home page of our modern web application.</Text>
    </Box>
  );
};

export default Home;