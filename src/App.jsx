import "./App.css";
import EnrollmentSection from "./components/EnrollmentSection";
import GetInTouch from "./components/GetInTouch";
import HeroSection from "./components/HeroSection";
import NotableInstructors from "./components/NotableInstructors";
import PublicationSection from "./components/PublicationSection";
import ExamsSection from "./components/TrendingAndExams";
import WhatWeOffer from "./components/WhatWeOffer";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <HeroSection />
      <EnrollmentSection />
      <WhatWeOffer />
      <ExamsSection />
      <PublicationSection />
      <NotableInstructors />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
