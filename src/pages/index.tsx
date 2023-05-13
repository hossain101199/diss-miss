import Aave from "@/assets/svgs/Aave";
import Blog from "@/assets/svgs/Blog";
import HomeIcon from "@/assets/svgs/HomeIcon";
import Invest from "@/assets/svgs/Invest";
import Loans from "@/assets/svgs/Loans";
import Logo from "@/assets/svgs/Logo";
import Menu from "@/assets/svgs/Menu";
import Mix from "@/assets/svgs/Mix";
import Container from "@/components/atoms/Container";
import HeroSection from "@/components/molecules/HeroSection";
import Navbar from "@/components/molecules/Navbar";
import bg from "../assets/images/logo.png";

import Sidebar from "@/layout/Sidebar";
import OwnershipInfo from "@/components/molecules/OwnershipInfo";
import Cryptocurrencies from "@/components/molecules/Cryptocurrencies";
import Facilities from "@/components/molecules/Facilities";
import Footer from "@/layout/Footer";
import TokensAndVoatings from "@/components/molecules/TokensAndVoatings";

export default function Home() {
  return (
    <Container className="lg:flex lg:my-32">
      <Sidebar />
      <div className="bg-background border-2 border-white-transparent lg:rounded-[45px] pt-16 w-full overflow-hidden">
        <Navbar />
        <HeroSection />
        <OwnershipInfo />
        <Cryptocurrencies />
        <Facilities />
        <TokensAndVoatings />
        <Footer />
      </div>
    </Container>
  );
}
