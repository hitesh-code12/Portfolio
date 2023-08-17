import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Hero, About, Experience, Tech, Feedbacks, Works, Contact, StarsCanvas } from "./components";
import MainScreen from "./components/MainScreen";

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
        <Navbar />
        </div>

        <Routes>
        <Route path="/Portfolio" element={<MainScreen />} />
        </Routes>


    </BrowserRouter>
  );
}

export default App;
