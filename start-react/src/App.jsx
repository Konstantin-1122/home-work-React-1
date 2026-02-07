
import Footer from "./components/Footer";
import Header from "./components/header";
import Genre from "./components/Genre";
import Description from "./components/Description";
import Button from "./components/Button";
import Sliders from "./components/Sliders";
import Rating from "./components/Rating";
import './index.css'

 


function App() {

  return (
    <>
    <div className='conteiner'>
      <Header></Header>
      <div className="small-wrapper">
        <Genre></Genre>
        <Description></Description>
        <Rating></Rating>
        <Button></Button>
        <Sliders></Sliders>
      </div>

      <Footer></Footer>
      </div>
    </>
  );
}

export default App;
