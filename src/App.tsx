import { SpeedInsights } from "@vercel/speed-insights/react";
import Header from "./components/Header";
import Search from "./components/Search";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Header />
      <Search />
      <Services />
      <SpeedInsights />
    </>
  );
}

export default App;
