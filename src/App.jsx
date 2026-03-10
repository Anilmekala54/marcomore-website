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
import Work from "./pages/Work";
import DigitalMarketing from "./pages/digitalmarketing"
import Seo from "./pages/Seo"
 import PerformanceMarketing from "./pages/PerformanceMarketing"

import SocialMediaMarkrting from "./pages/SocialMediaMarkrting"
import EmailMarketing from "./pages/EmailMarketing";
import Affiliatemarketing from "./pages/Affiliatemarketing"

import InfluencerMarketing from "./pages/InfluencerMarketing";
// import EmailMarketing from "../src/components/services/EmailMarketing"
// import YouTubeMarketing from "../src/components/services/YouTubeMarketing"

function App() {
  return (
    <SmoothScroll>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/franchising" element={<Resources />} />
        <Route
          path="/frequentlyAskedQuestion"
          element={<FrequentlyAskedQuestion />}
        />
        <Route path="/requestproposal" element={<RequestProposal />} />
        <Route path="/career" element={<Careers />} />
        <Route path="/careers/:slug" element={<JobDetails />} />
        <Route path="/work" element={<Work />} />
        <Route path="/digitalmarketing" element={<DigitalMarketing/>}/>
         <Route
          path="/searchengineoptimization"
          element={<Seo />}
        /> 
        <Route
          path="/performancemarketing"
          element={<PerformanceMarketing />}
        />
        
        <Route
          path="/socialmediamarketing"
          element={<SocialMediaMarkrting />}
        /> 
       
       
        <Route
          path="/emailmarketing"
          element={<EmailMarketing />}
        />
        <Route
          path="/affiliatemarketing"
          element={<Affiliatemarketing />}
        />
        <Route
          path="/influencermarketing"
          element={<InfluencerMarketing />}
        />
      </Routes>
    </SmoothScroll>
  );
}

export default App;
