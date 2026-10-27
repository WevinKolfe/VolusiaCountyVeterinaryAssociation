import Hero from "../components/Hero";
import MemberBenefits from "../components/MemberBenefits";
import UpcomingEvents from "../components/UpcomingEvents";
import FeaturedClinic from "../components/FeaturedClinic";
import Sponsors from "../components/Sponsors";
import CTASection from "../components/CTASection";

function HomePage() {
  return (
    <main>
      <Hero />
      <MemberBenefits />
      <UpcomingEvents />
      <FeaturedClinic />
      <Sponsors />
      <CTASection />
    </main>
  );
}

export default HomePage;