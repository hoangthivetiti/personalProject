import { useState } from "react";
import "./App.css";
import AboutUs from "./component/AboutUs";
import Header from "./component/Header";
import Home from "./component/Home";

function App() {
  const [idClick, setIdClick] = useState<number>(1);

  const handleItemClick = (id: number) => {
    setIdClick(id);
  };

  return (
    <>
      <nav className="bg-[#F5FAF5] font-[Epilogue]">
        <Header idClick={idClick} onItemClick={handleItemClick} />
        <Home />
        <AboutUs />
      </nav>
    </>
  );
}

export default App;
