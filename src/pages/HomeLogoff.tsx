import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from "../components/Hero";
import StepsToTake from "../components/StepsToTake";
import Panel1 from "../components/Panel1";
import Carousel from "../components/Carousel";
export function HomeLogoff() {
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
