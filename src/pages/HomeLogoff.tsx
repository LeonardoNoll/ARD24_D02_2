import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import StepsToTake from "../Components/StepsToTake";
import Panel1 from "../Components/Panel1";
import BestSelling from "../Components/BestSelling";
import Carousel from "../Components/Carousel";
export function HomeLogoff() {
  return (
    <>
      <Header isLogin={false} />
      <Hero />
      <StepsToTake />
      <Panel1 />
      <BestSelling />
      <Carousel />
      <Footer />
    </>
  );
}

