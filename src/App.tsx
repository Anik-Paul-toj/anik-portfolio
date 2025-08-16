import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import GitHubInsights from './components/GitHubInsights';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <GitHubInsights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
