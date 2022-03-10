import { Routes, Route, useLocation } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { lightTheme } from './components/Themes';
import GlobalStyle from './globalStyles';

import Main from './pages/Main';
import AboutPage from './pages/AboutPage';
import CareerPage from './pages/CareerPage';
import PortfolioPage from './pages/PortfolioPage';
import MySkillsPage from './pages/MySkillsPage';
import SoundBar from './subComponents/SoundBar';

const App = () => {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <SoundBar />

        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/career" element={<CareerPage />} />
            <Route exact path="/portfolio" element={<PortfolioPage />} />
            <Route exact path="/skills" element={<MySkillsPage />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
};

export default App;
