import Header from '../Components/Header'
import Footer from '../Components/Footer';
import AboutCristian from '../Components/AboutCristian.tsx';
import AboutLeonardo from '../Components/AboutLeonardo.tsx';
import AboutAdercio from '../Components/AboutAdercio.tsx';
import AboutRayanne from '../Components/AboutRayanne.tsx';
import AboutFelipe from '../Components/AboutFelipe.tsx';

const AboutUs = () => {
    return (
        <>
   
        <Header isLogin={false}/>
        <div className="flex justify-around flex-wrap gap-[60px]">
          <AboutCristian/>
          <AboutAdercio />
          <AboutLeonardo />
          <AboutRayanne />
          <AboutFelipe />
        </div>
        
        <Footer/>
        </>
    )
};

export default AboutUs;