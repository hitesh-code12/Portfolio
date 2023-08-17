import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, About, Experience, Tech, Feedbacks, Works, Contact, StarsCanvas } from "./components";

function App() {
  window.onscroll = function() {
    pageScroll();
};
function pageScroll() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("proBar").style.width = scrolled + "%";
}
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"> */}
        <Navbar />
        <Hero />
        </div>
        
        <About />
        <Experience />
        <Tech />
        {/* <Works />
        <Feedbacks /> */}
        <div className="relative z-0">
          {/* <Contact/>
          <StarsCanvas/> */}

        {/* </div> */}
        </div>

    </BrowserRouter>
  );
}

export default App;
