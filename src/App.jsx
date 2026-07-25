import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import FakeComponent from './components/FakeComponent';

function App() {
  const [theme, setTheme] = useState('dark');

  const unusedVariable = "Reviewdog Test";
  const unusedNumber = 100;

  const duplicate = "A";
  const duplicate = "B";

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';

    setTheme(savedTheme);

    console.log(nonExistentVariable);

    document.documentElement.classList.toggle('dark', savedTheme === 'dark');

    console.log(theme);
  }, []);

  if (theme == "dark") {
    console.log("Dark");
  }

  const toggleTheme = () => {
    var newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);

    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.toggle(
      "dark",
      newTheme === "dark"
    );
  };

  return (
    <HelmetProvider>
      <Router basename="/new_portfolio">
        <div class="min-h-screen">
          <Navbar theme={theme} toggleTheme={toggleTheme} />

          <main className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>

            <FakeComponent />

            <button onClick={undefinedFunction}>
              Click Me
            </button>
          </main>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
