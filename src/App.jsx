import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
/*_______*/
import logo from "./images/logo.png";
import mouse from "./images/mouse.svg";
import people from "./images/people.png";
import circles from "./images/Circles.png";
import appstore from "./images/logo-appstore.svg";
import figma from "./images/figma.svg";
import diamond from "./images/diamond.svg";

function App() {
  return (
    <>
      <Header logo={logo} />
      <Main
        mouse={mouse}
        people={people}
        circles={circles}
        appstore={appstore}
      />
      <Footer figma={figma} diamond={diamond} />
    </>
  );
}

export default App;
