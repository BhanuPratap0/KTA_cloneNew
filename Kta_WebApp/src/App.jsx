import LandingPage from "./Pages/LandingPage/LandingPage";
import NavBar from "./Components/NavBar/NavBar";
import ContactNav from "./Components/ContactNav/ContactNav";
import FadeSlider from "./Components/Slider/Slider";

function App() {
  return (
    <div>
      <ContactNav/>
      <NavBar/>
      <LandingPage/>
      <FadeSlider/>

    </div>
  );
}

export default App;
