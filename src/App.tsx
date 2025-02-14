import Hero from "./components/hero";
import About from "./components/about";
import OurMenu from "./components/our-menu";
import OurChef from "./components/our-chef";
import Booking from "./components/booking";
import Gallery from "./components/gallery";
import Footer from "./components/footer";
import BottomFooter from "./components/footer/bottom_footer";
import CopyRights from "./components/footer/copy-rights";
import BackToTop from "./components/global/back-to-top";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <OurMenu />
      <OurChef />
      <Booking />
      <Gallery />
      <Footer />
      <BottomFooter />
      <CopyRights />
      <BackToTop />
    </div>
  );
}

export default App;
