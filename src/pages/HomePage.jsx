import Hero from "../components/Hero";
import MemberBenefits from "../components/MemberBenefits";
import UpcomingEvents from "../components/UpcomingEvents";
import FeaturedClinic from "../components/FeaturedClinic";
import Sponsors from "../components/Sponsors";
import CTASection from "../components/CTASection";

function HomePage() {
  return (
    <>
      <Hero />
      <MemberBenefits />
      <UpcomingEvents />
      <FeaturedClinic />
      <Sponsors />
      <CTASection />
    </>
  );
}

export default HomePage;