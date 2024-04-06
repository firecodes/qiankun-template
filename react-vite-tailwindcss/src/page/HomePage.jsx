import Hero from '@/Sections/Hero';
import Services from '@/Sections/Services';
import WhyQuave from '@/Sections/WhyQuave';
import OurExperts from '@/Sections/OurExperts';
import HowWeWork from '@/Sections/HowWeWork';
import CustomerStories from '@/Sections/CustomerStories';
import FAQs from '@/Sections/FAQs';
import { Media } from '@/Sections/Media';

export const HomePage = ({ toggleContactUs }) => (
  <>
    <Hero toggleContactUs={toggleContactUs} />
    <Services />
    <WhyQuave />
    <OurExperts />
    <HowWeWork />
    <CustomerStories />
    <Media />
    <FAQs />
  </>
);
