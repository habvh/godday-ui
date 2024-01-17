import { SpeedInsights } from "@vercel/speed-insights/react";
import Header from "./components/Header";
import Search from "./components/Search";
import Services from "./components/Services";
import TemplateSell from "./components/SlideProject";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Search />
      <Services />
      <TemplateSell />
      <Footer />
      <SpeedInsights />
    </>
  );
}

export default App;
