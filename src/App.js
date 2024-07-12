import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import "./utils.css";

function App() {
  let styles = [
    'font-size: 12px',
    'color: #fffce1',
    'font-family: monospace',
    'background: #0e100f',
    'display: inline-block',
    'padding: 1rem 3rem',
    'border: 1px solid #fffce1',
    'border-radius: 4px;'
  ].join(';');
  console.log('%cHello, I am a Frontend Developer. I am looking for a job. You can contact me at:shaikhaltamash411@gmail.com', styles);
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Footer />
      <Marquee text={'Site is Under development phase'} />
    </>
  );
}

export default App;
