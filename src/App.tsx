import Header from '../src/Components/Header'
import Footer from '../src/Components/Footer';
import Hero from './Components/Hero';
import StepsToTake from './Components/StepsToTake';
import Panel1 from './Components/Panel1';
import BestSelling from './Components/BestSelling';
import Carousel from './Components/Carousel';
function App() {
  return (
    <>
    <Header isLogin={false}/>
    <Hero />
    <StepsToTake />
    <Panel1 />
    <BestSelling />
    <Carousel />

    
    <Footer/>
    
    </>
  );
}

export default App;
