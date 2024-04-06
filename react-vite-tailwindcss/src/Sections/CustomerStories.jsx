import { FeaturedCaseStudies } from '@/page/CaseStudies';

const CustomerStories = () => {
  return (
    <>
      <div className="container mx-auto 2xl:max-w-default flex flex-col items-center text-center px-4 lg:px-8">
        <h2 className="text-h3 md:text-h2 mb-2 font-semibold text-neutral-300">
          Customer stories
        </h2>
        <h6 className="text-p md:text-h6 mb-14 max-w-small">
          Learn why companies trust Quave to build and improve their products.
        </h6>
      </div>

      <section data-id="cs-featured-list" className="mb-24 px-4">
        <FeaturedCaseStudies showFeaturedImage />
      </section>
    </>
  );
};

export default CustomerStories;
