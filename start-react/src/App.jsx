import Footer from "./components/Footer";
import Header from "./components/header";
import Genre from "./components/Genre";
import Description from "./components/Description";
import Button from "./components/Button";
import Sliders from "./components/Sliders";

function App() {
  return (
    <>
      <Header></Header>
      <div className="small-wrapper">
        <Genre></Genre>
        <Description></Description>
        <Button></Button>
        <Sliders></Sliders>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
