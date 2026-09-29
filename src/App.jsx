import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Why from './components/Why';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Courses from './components/Course';
import Feedback from './components/Feedback';
import Stats from './components/Stats';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navbar />
      <Hero />
      <Stats/>
      <Why />
      <Courses />
      <Feedback/>
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
