import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import StepsToTake from "../Components/StepsToTake";
import Panel1 from "../Components/Panel1";
import Carousel from "../Components/Carousel";
export default function HomeLogoff() {
  return (
    <>
      <Header isLogin={false} />
      <Hero />
      <StepsToTake />
      <Panel1 />
      <Carousel />
      <Footer />
    </>
  );
}
