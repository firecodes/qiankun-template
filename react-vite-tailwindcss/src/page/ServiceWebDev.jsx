import React from 'react';
import { FeaturedCaseStudies } from '@/page/CaseStudies';

const webDevServices = [
  {
    icon: 'faArrowsRepeat',
    title: 'Modernize',
    text: "Upgrade app performance by modernizing code and architecture with cutting-edge designs, frameworks, and patterns to thrive in today's tech landscape.",
  },
  {
    icon: 'faLightbulbOn',
    title: 'New features',
    text: 'From entire new modules to simple button changes, our team is prepared to assist you with a wide range of new features for your project.',
  },
  {
    icon: 'faWrench',
    title: 'Maintenance',
    text: "If your primary focus isn't new features, but ensuring code reliability and swift bug resolution, our Maintenance service is your dependable solution.",
  },
  {
    icon: 'faPuzzle',
    title: 'Integration',
    text: 'We facilitate seamless app integration with various systems and platforms, ensuring a smooth and user-friendly experience.',
  },
  {
    icon: 'faChartMixed',
    title: 'Optimization',
    text: 'Enhance app performance with expert optimizations. We tackle slow queries, screens, and methods, ensuring efficient implementation.',
  },
  {
    icon: 'faBrowser',
    title: 'Minimum viable product',
    text: 'If you need to start from 0, that’s ok. We have the right team to get it off the ground and help you launch the first version of your app.',
  },
];

const WebDevService = ({ toggleContactUs }) => (
  <>
    <section data-id="hero" className="sm:px-4">
      <div className="mx-auto max-w-uwide flex flex-center flex-col bg-coral-300 bg-service-web-dev sm:rounded-8 lg:h-[500px] xl:h-[620px]">
        <div className="container 2xl:max-w-default text-white text-center py-16 px-4">
          <h1 className="text-h3 md:text-h2 lg:text-h1 font-bold mb-4">
            Web app development
          </h1>
          <h6 className="text-p lg:text-h6 mb-8 max-w-[700px] mx-auto">
            Leveraging modern approaches to web development, we bring front-end,
            back-end, and architecture together to meet your business needs.
          </h6>
          <button
            className="btn-primary btn-primary_large text-coral-300 bg-white hover:bg-white_A92"
            onClick={toggleContactUs}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>

    <div
      data-id="services-title"
      className="container mx-auto 2xl:max-w-default flex flex-col items-center text-center px-4 lg:px-8 mt-24"
    >
      <h2 className="text-h3 md:text-h2 mb-2 font-semibold text-neutral-300">
        Complete services
      </h2>
      <h6 className="text-p md:text-h6 mb-14 max-w-small">
        Elevate your digital presence with our expertise in modernizing, adding
        new features, maintaining, integrating, optimizing, and building minimum
        viable products.
      </h6>
    </div>
    <section data-id="service-list" className="px-4 lg:px-8 mb-24">
      <div className="container 2xl:max-w-default mx-auto">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {webDevServices.map(({ icon, title, text }, index) => (
            <li key={index}>
              {/* <FontAwesomeIcon
                icon={icon}
                className="text-coral-300 h-10 w-10 mb-4"
              /> */}
              <h4 className="text-h4 font-semibold text-neutral-300 mb-4">
                {title}
              </h4>
              <p className="text-p">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <div
      data-id="services-title"
      className="container mx-auto 2xl:max-w-default flex flex-col items-center text-center px-4 lg:px-8 mt-24"
    >
      <h2 className="text-h3 md:text-h2 mb-2 font-semibold text-neutral-300">
        Get to know us
      </h2>
      <h6 className="text-p md:text-h6 mb-14 max-w-small">
        Expert leadership and cutting-edge technologies. Discover why partnering
        with us is the smart choice for your digital success.
      </h6>
    </div>
    <section data-id="service-list" className="px-4 lg:px-8 mb-24">
      <div className="container 2xl:max-w-default mx-auto">
        <h5 className="text-h5 text-neutral-300 font-semibold text-center">
          Our head of web app development:
        </h5>
        <div className="flex flex-col sm:flex-row items-center border border-neutral-700 rounded-6 p-4 max-w-[640px] gap-4 mx-auto mt-4">
          <img
            className="rounded-4 shrink-0 grow-0"
            src="/images/expert-filipe-large.jpg"
            alt="Filipe Nevola"
          />
          <div className="text-center sm:text-left">
            <h5 className="text-h5 font-semibold text-neutral-300">
              Filipe Nevola
            </h5>
            <p className="text-p">Lead Developer & CEO</p>
            <p className="text-p mt-2">
              17 years of web mastery. A problem solver. Known for enhancing
              project quality, improving developer productivity, and helping
              businesses achieve goals rapidly with web tech. He prioritizes
              choosing the best solution for each problem, not just the latest
              tech.
            </p>
          </div>
        </div>
        <h5 className="text-h5 text-neutral-300 font-semibold text-center mt-10">
          Technologies we master:
        </h5>

        <div className="flex flex-wrap items-center justify-center bg-neutral-900 gap-10 py-8 px-4 rounded-6 mt-4">
          <img src="/images/service-logo-react.png" alt="React" />
          <img src="/images/service-logo-meteor.png" alt="Meteor" />
          <img src="/images/service-logo-node.png" alt="NodeJS" />
          <img src="/images/service-logo-next.png" alt="Next" />
          <img src="/images/service-logo-blaze.png" alt="Blaze" />
          <img src="/images/service-logo-python.png" alt="Python" />
          <img src="/images/service-logo-bun.png" alt="Bun" />
          <img src="/images/service-logo-vue.png" alt="Vue" />
        </div>
      </div>
    </section>

    <section className="px-4 lg:px-8 mb-24">
      <div className="container 2xl:max-w-default mx-auto flex gap-12 flex-col lg:flex-row">
        <div
          data-id="meteor-services-title"
          className="shrink-0 grow-0 lg:basis-[360px] xl:basis-[460px]"
        >
          <h3 className="text-h3 text-neutral-300 font-semibold mb-2">
            Why develop your web app with Quave?
          </h3>
          <h6 className="text-p md:text-h6 text-neutral-500 mb-6">
            Over 20 years of software expertise, mastery of cutting-edge
            technologies, a full team to support your software needs, and a
            perfect balance of quality and speed in code delivery.
          </h6>
        </div>
        <div className="flex-auto">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            <li>
              <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                Experience
              </h5>
              <p className="text-p text-neutral-500">
                With over 20 years in software, we bring extensive experience to
                the table, showcasing our commitment to excellence.
              </p>
            </li>
            <li>
              <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                Modern
              </h5>
              <p className="text-p text-neutral-500">
                We pride ourselves on our proficiency in utilizing the most
                up-to-date and advanced technologies, keeping us at the
                forefront of the industry.
              </p>
            </li>
            <li>
              <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                All in one
              </h5>
              <p className="text-p text-neutral-500">
                We've got all your software needs covered - developers, DevOps,
                designers, PMs and more - allowing you to concentrate on your
                core business.
              </p>
            </li>
            <li>
              <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                Quality and velocity
              </h5>
              <p className="text-p text-neutral-500">
                We strike the perfect balance between quality and speed,
                ensuring rapid code delivery without compromising on our high
                standards.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <div
      data-id="customer-stories"
      className="container mx-auto 2xl:max-w-default flex flex-col items-center text-center px-4 lg:px-8 mt-24"
    >
      <h2 className="text-h3 md:text-h2 mb-2 font-semibold text-neutral-300">
        Web development success stories
      </h2>
      <h6 className="text-p md:text-h6 mb-14 max-w-small">
        Learn why companies trust Quave to build and improve their products.
      </h6>
    </div>
    <section data-id="cs-featured-list" className="mb-24 px-4">
      <FeaturedCaseStudies selectedCS={['lempire', 'favro', 'sostena']} />
    </section>
  </>
);
export const WebDevServicePage = ({ ...rest }) => <WebDevService {...rest} />;
