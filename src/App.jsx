import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./Navbar/Navbar";
import { Container } from "@mui/material";
import Banner from "./Banner/Banner";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Banner />
    </>
  );
};

export default App;
