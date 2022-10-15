import "./scss/style.scss";

import Header from "./components/Header/Header";
import Diagram from "./components/Diagram/Diagram";
import HydeNationPass from "./components/HydeNationPass/HydeNationPass";
import HydeNationPrescription from "./components/HydeNationPrescription/HydeNationPrescription";
import Intro from "./components/Intro/Intro";
import NftDesign from "./components/NftDesign/NftDesign";
import Outro from "./components/Outro/Outro";
import Roadmap from "./components/Roadmap/Roadmap";
import Whyis from "./components/Whyis/Whyis";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Roadmap />
      <Whyis />
      <HydeNationPrescription />
      <HydeNationPass />
      <Diagram />
      <NftDesign />
      <Outro />
      <Footer />
    </div>
  );
}

export default App;
