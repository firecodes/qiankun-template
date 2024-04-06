import React from 'react';
import { FeaturedCaseStudies } from '@/page/CaseStudies';

const webDevServices = [
  {
    icon: 'faListCheck',
    title: 'Technology guidance',
    text: "Whether it’s assistance in choosing the best technologies for your project or removing outdated libraries and legacy code, we're here to help.",
  },
  {
    icon: 'faChartLineUp',
    title: 'Prepare for growth',
    text: 'Identify bottlenecks and offer solutions to scale your infrastructure, like server upgrades and system optimization for top-notch performance.',
  },
  {
    icon: 'faUsersRectangle',
    title: 'Customer complaints',
    text: 'We can help you identify and solve problems like sluggish loading, unresolved bugs, and inefficient flow, among other issues.',
  },
  {
    icon: 'faChartPieSimpleCircleDollar',
    title: 'Budget optimization',
    text: 'Optimize your budget for servers and resources, ensuring cost savings without compromising performance.',
  },
  {
    icon: 'faUsersGear',
    title: 'Team performance assessment',
    text: 'When your team seems to be under-performing, rely on our expertise to assess their knowledge, performance, and suitability for the task.',
  },
  {
    icon: 'faLockAlt',
    title: 'Security concerns',
    text: 'Spot system vulnerabilities like unencrypted data or weak authentication and receive recommendations for resolution.',
  },
  {
    icon: 'faGaugeCircleBolt',
    title: 'System performance',
    text: "Facing system slowness and technical inefficiencies? We're here to assist in enhancing your system's performance.",
  },
  {
    icon: 'faClipboardListCheck',
    title: 'Project management review',
    text: 'Looking for improved transparency and team communication? We revamp your processes with the right techniques and tools.',
  },
  {
    icon: 'faBrush',
    title: 'Design review',
    text: "Examine the system's UI/UX, offering solutions that align with your system's objectives to enhance its performance and user experience.",
  },
];

const ConsultingService = ({ toggleContactUs }) => (
  <>
    <section data-id="hero" className="sm:px-4">
      <div className="mx-auto max-w-uwide flex flex-center flex-col bg-moonstone-300 bg-service-consulting sm:rounded-8 lg:h-[500px] xl:h-[620px]">
        <div className="container 2xl:max-w-default text-white text-center py-16 px-4">
          <h1 className="text-h3 md:text-h2 lg:text-h1 font-bold mb-4">
            Consulting
          </h1>
          <h6 className="text-p lg:text-h6 mb-8 max-w-[700px] mx-auto">
            Explore our comprehensive consulting services. Expertise in
            technology, infrastructure, performance, team assessment, security,
            budget optimization, project management, and design enhancement.
          </h6>
          <button
            className="btn-primary btn-primary_large text-moonstone-300 bg-white hover:bg-white_A92"
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
        Explore our comprehensive consulting services. Expertise in technology,
        infrastructure, performance, team assessment, security, budget
        optimization, project management, and design enhancement.
      </h6>
    </div>
    <section data-id="service-list" className="px-4 lg:px-8 mb-24">
      <div className="container 2xl:max-w-default mx-auto">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webDevServices.map(({ icon, title, text }, index) => (
            <li key={index}>
              {/* <FontAwesomeIcon
                icon={icon}
                className="text-moonstone-300 h-10 w-10 mb-4"
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
          Our head of consulting:
        </h5>
        <div className="flex flex-col sm:flex-row items-center border border-neutral-700 rounded-6 p-4 max-w-[640px] gap-4 mx-auto mt-4">
          <img
            className="rounded-4 shrink-0 grow-0"
            src="/images/expert-rafa-large.jpg"
            alt="Rafael Braga"
          />
          <div className="text-center sm:text-left">
            <h5 className="text-h5 font-semibold text-neutral-300">
              Rafael Braga
            </h5>
            <p className="text-p">Development Director</p>
            <p className="text-p mt-2">
              With 15+ years steering tech projects, our Head of Consulting
              brings global expertise in digital products. Consulted for BMW,
              Microsoft, and other major tech firms. A pro communicator, skilled
              in understanding problems and delivering spot-on solutions.
            </p>
          </div>
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
            Why get a consultation with Quave?
          </h3>
          <h6 className="text-p md:text-h6 text-neutral-500 mb-6">
            Seasoned IT experts, strategic focus, continuous improvement, and
            fresh, innovative thinking.
          </h6>
        </div>
        <div className="flex-auto">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            <li>
              <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                Domain Knowledge
              </h5>
              <p className="text-p text-neutral-500">
                Expertise in our team runs deep, featuring seasoned
                professionals from the IT industry, including former C-level
                executives and enterprise managers.
              </p>
            </li>
            <li>
              <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                Holistic solutions
              </h5>
              <p className="text-p text-neutral-500">
                Our perspective centers on your strategic objectives as we
                assess your operational structure.
              </p>
            </li>
            <li>
              <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                Continuous improvement
              </h5>
              <p className="text-p text-neutral-500">
                Continuous learning and improvement drive Quave daily, and we
                share that knowledge and experience with our valued customers.
              </p>
            </li>
            <li>
              <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                Innovative Outlook
              </h5>
              <p className="text-p text-neutral-500">
                While we boast extensive experience, our team is composed of
                young tech enthusiasts with fresh perspectives, unburdened by
                outdated patterns and processes.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <div
      data-id="services-title"
      className="container mx-auto 2xl:max-w-default flex flex-col items-center text-center px-4 lg:px-8 mt-24"
    >
      <h2 className="text-h3 md:text-h2 mb-2 font-semibold text-neutral-300">
        Consulting success stories
      </h2>
      <h6 className="text-p md:text-h6 mb-14 max-w-small">
        Learn why companies trust Quave to build and improve their products.
      </h6>
    </div>
    <section data-id="cs-featured-list" className="mb-24 px-4">
      <FeaturedCaseStudies selectedCS={['polidigital', 'lempire', 'sostena']} />
    </section>
  </>
);
export const ConsultingServicePage = ({ ...rest }) => (
  <ConsultingService {...rest} />
);
