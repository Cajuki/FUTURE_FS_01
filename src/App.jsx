import Nav        from './components/Nav.jsx';
import Hero       from './components/Hero.jsx';
import Projects   from './components/Projects.jsx';
import About      from './components/About.jsx';
import Skills     from './components/Skills.jsx';
import Journey    from './components/Journey.jsx';
import Services   from './components/Services.jsx';
import Contact    from './components/Contact.jsx';
import Footer     from './components/Footer.jsx';

export default function App() {
  return (
    <div style={{ background: '#0A0F1E', minHeight: '100vh' }}>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Journey />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
