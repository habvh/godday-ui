import { SpeedInsights } from "@vercel/speed-insights/react";
import Header from "./components/Header";
import Search from "./components/Search";
import Services from "./components/Services";
import TemplateSell from "./components/SlideProject";

function App() {
  return (
    <>
      <Header />
      <Search />
      <Services />
      <TemplateSell />
      <SpeedInsights />
    </>
  );
}

export default App;
