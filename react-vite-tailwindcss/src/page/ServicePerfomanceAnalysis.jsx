import React from 'react';
import { FeaturedCaseStudies } from '@/page/CaseStudies';

const webDevServices = [
  {
    icon: 'faArrowUpRightDots',
    title: 'Load Testing',
    text: 'Our load testing helps you understand how your app handles stress, if it can manage more users and traffic well, and ways to optimize your resources.',
  },
  {
    icon: 'faCode',
    title: 'Code optimization',
    text: 'Our expertise in various frameworks allows us to analyze your code, look for bottlenecks and inefficiencies, and propose ways to boost your app’s performance.',
  },
  {
    icon: 'faMonitorWaveform',
    title: 'Monitoring',
    text: 'We integrate monitoring solutions (APM) to bring better visibility and ensure system availability, optimize service performance and response times.',
  },
];

const PerformanceAnalysisService = ({ toggleContactUs }) => (
  <>
    <section data-id="hero" className="sm:px-4">
      <div className="mx-auto max-w-uwide flex flex-center flex-col bg-amethyst-300 bg-service-other sm:rounded-8 lg:h-[500px] xl:h-[620px]">
        <div className="container 2xl:max-w-default text-white text-center py-16 px-4">
          <h1 className="text-h3 md:text-h2 lg:text-h1 font-bold mb-4">
            Performance Analysis
          </h1>
          <h6 className="text-p lg:text-h6 mb-8 max-w-[700px] mx-auto">
            Enhance your app with load testing, code optimization, and
            monitoring solutions for improved performance, resource
            optimization, and system availability.
          </h6>
          <button
            className="btn-primary btn-primary_large text-primary-300 bg-white hover:bg-white_A92"
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
        Enhance your app with load testing, code optimization, and monitoring
        solutions for improved performance, resource optimization, and system
        availability.
      </h6>
    </div>
    <section data-id="service-list" className="px-4 lg:px-8 mb-24">
      <div className="container 2xl:max-w-default mx-auto">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webDevServices.map(({ icon, title, text }, index) => (
            <li key={index}>
              {/* <FontAwesomeIcon
                icon={icon}
                className="text-amethyst-300 h-10 w-10 mb-4"
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

    <section className="px-4 lg:px-8 mb-24">
      <div className="container 2xl:max-w-default mx-auto flex gap-12 flex-col lg:flex-row">
        <div
          data-id="meteor-services-title"
          className="shrink-0 grow-0 lg:basis-[360px] xl:basis-[460px]"
        >
          <h3 className="text-h3 text-neutral-300 font-semibold mb-2">
            Why let Quave do a performance analysis?
          </h3>
          <h6 className="text-p md:text-h6 text-neutral-500 mb-6">
            Experience a considerable boost in performance with our expertise in
            optimizing apps and custom tailored solutions.
          </h6>
        </div>
        <div className="flex-auto">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            <li>
              <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                90% boost
              </h5>
              <p className="text-p text-neutral-500">
                Optimizing performance is one of our most recurring requests. We
                have optimized apps' performance by more than 90%.
              </p>
            </li>
            <li>
              <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                Expert Insights
              </h5>
              <p className="text-p text-neutral-500">
                There are several ways to optimize performance, and you need
                expertise for that. LCP, CLS, FID, we know the underlying
                factors to provide a better user experience.
              </p>
            </li>
            <li>
              <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                Navigating success
              </h5>
              <p className="text-p text-neutral-500">
                Tap into our years of experience, and let us guide you toward
                the most effective approach to achieving your goals.
              </p>
            </li>
            <li>
              <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                Tailored solutions
              </h5>
              <p className="text-p text-neutral-500">
                We provide personalized performance analysis and optimization
                strategies tailored to your specific needs.
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
        Performance analysis success stories
      </h2>
      <h6 className="text-p md:text-h6 mb-14 max-w-small">
        Learn why companies trust Quave to build and improve their products.
      </h6>
    </div>
    <section data-id="cs-featured-list" className="mb-24 px-4">
      <FeaturedCaseStudies selectedCS={['sostena', 'polidigital', 'bemarke']} />
    </section>
  </>
);
export const PerformanceAnalysisServicePage = ({ ...rest }) => (
  <PerformanceAnalysisService {...rest} />
);
