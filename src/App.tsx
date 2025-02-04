import Header from '../src/Components/Header'
import Footer from '../src/Components/Footer';
import Hero from './Components/Hero';
import StepsToTake from './Components/StepsToTake';
function App() {
  return (
    <>
    <Header isLogin={false}/>
    <Hero />
    <StepsToTake />

    
    <Footer/>
    
    </>
  );
}

export default App;
