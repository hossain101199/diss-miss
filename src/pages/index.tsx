import Container from "@/components/atoms/Container";
import HeroSection from "@/components/molecules/HeroSection";
import Navbar from "@/components/molecules/Navbar";
import Sidebar from "@/layout/Sidebar";
import OwnershipInfo from "@/components/molecules/OwnershipInfo";
import Cryptocurrencies from "@/components/molecules/Cryptocurrencies";
import Facilities from "@/components/molecules/Facilities";
import Footer from "@/layout/Footer";
import TokensAndVoatings from "@/components/molecules/TokensAndVoatings";

export default function Home() {
  return (
    <div className="mainBgImage">
      <Container className="lg:flex lg:py-32">
        <Sidebar />
        <div className="relative bg-background border-2 border-white-transparent lg:rounded-[45px] pt-16 w-full overflow-hidden">
          <div className="relative z-10">
            <Navbar />
            <HeroSection />
            <OwnershipInfo />
            <Cryptocurrencies />
            <Facilities />
            <TokensAndVoatings />
            <Footer />
          </div>
          <div className="gradientEllipse857" />
          <div className="gradientEllipse866" />
          <div className="gradientEllipse854" />
          <div className="gradientEllipse862" />
          <div className="gradientEllipse875" />
          <div className="gradientEllipse879" />
          <div className="gradientEllipse878" />
          <div className="gradientEllipse870" />
          <div className="gradientEllipse865" />
          <div className="gradientEllipse864" />
          <div className="gradientEllipse863" />
          <div className="gradientEllipse859" />
          <div className="gradientEllipse860" />
          <div className="gradientEllipse861" />
          <div className="gradientEllipse858" />
          <div className="gradientEllipse876" />
          <div className="gradientEllipse868" />
          <div className="gradientEllipse874" />
          <div className="gradientEllipse873" />
          <div className="gradientEllipse869" />
          <div className="gradientEllipse867" />
          <div className="gradientEllipse852" />
        </div>
      </Container>
    </div>
  );
}
