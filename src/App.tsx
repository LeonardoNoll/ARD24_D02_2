import Header from '../src/Components/Header'
import Footer from '../src/Components/Footer';
import Login from './pages/Login.tsx';


function App() {
  return (
    <>
   
    <Header isLogin={false}/>
    
    <Login />
    <Footer/>
    </>
  );
}

export default App;
