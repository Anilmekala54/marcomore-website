import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import SmoothScroll from "./utils/SmoothScroll";
import FrequentlyAskedQuestion from "./pages/FrequentlyAskedQuestion";
import RequestProposal from "./pages/RequestProposal";
import Careers from "./pages/Careers";
import JobDetails from "./pages/JobDetails";

function App() {
  return (
    <SmoothScroll>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/frequentlyAskedQuestion" element={<FrequentlyAskedQuestion/>} />
        <Route path="/requestproposal" element={<RequestProposal/>} />
        <Route path="/career" element={<Careers/>} />
        <Route path="/careers/:slug" element={<JobDetails />} />
      </Routes>
    </SmoothScroll>
  );
}

export default App;
