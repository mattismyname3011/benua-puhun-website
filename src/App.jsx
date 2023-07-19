import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
// import Header from './navbar'

// import show_pdf from "./components/pages/pages_2";
import Home from "./components/pages/home";
import Docs from "./components/pages/docs";
import Gallery from "./components/pages/gallery";
// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <Header></Header>
//       <Hero></Hero>
//       <Footer></Footer>
//     </>
//   );
// }

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
};

export default App;
