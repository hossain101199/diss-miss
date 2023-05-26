import Container from "@/components/atoms/Container";
import HeroSection from "@/components/molecules/HeroSection";
import Navbar from "@/components/molecules/Navbar";
import Sidebar from "@/layout/Sidebar";
import OwnershipInfo from "@/components/molecules/OwnershipInfo";
import Cryptocurrencies from "@/components/molecules/Cryptocurrencies";
import Facilities from "@/components/molecules/Facilities";
import Footer from "@/layout/Footer";
import TokensAndVoatings from "@/components/molecules/TokensAndVoatings";
import HomePageGradient from "@/components/atoms/HomePageGradient";

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
          <HomePageGradient />
        </div>
      </Container>
    </div>
  );
}
