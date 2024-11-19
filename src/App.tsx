import "./App.css";
import AboutUs from "./component/AboutUs";
import Header from "./component/Header";
import Home from "./component/Home";

function App() {
  return (
    <>
      <div className="font-[Epilogue] bg-[#F5FAF5]">
        <Header />
        <Home />
        <AboutUs />
      </div>
    </>
  );
}

export default App;
