import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, Spinner, Link } from '@chakra-ui/react';
import Navigation from './components/Navigation';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const App: React.FC = () => {
  return (
    <Router>
      <Link href="#main-content" position="absolute" left="-9999px" top="auto" width="1px" height="1px" overflow="hidden" zIndex="9999" _focus={{ left: "50%", transform: "translateX(-50%)", width: "auto", height: "auto" }}>
        Skip to main content
      </Link>
      <Box maxWidth="1200px" margin="0 auto" padding="20px">
        <Navigation />
        <Suspense fallback={
          <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Spinner size="xl" />
          </Box>
        }>
          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </Suspense>
      </Box>
    </Router>
  );
};

export default App;