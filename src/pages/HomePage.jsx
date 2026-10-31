import PageTitle from "../components/seo/PageTitle";
import Hero from "../components/home/Hero";
import MemberBenefits from "../components/home/MemberBenefits";
import UpcomingEvents from "../components/home/UpcomingEvents";
import FeaturedClinic from "../components/home/FeaturedClinic";
import Sponsors from "../components/home/Sponsors";
import CTASection from "../components/home/CTASection";

function HomePage() {

 
  return (
    <main>
      <PageTitle title="Volusia Veterinary Medical Association" />
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