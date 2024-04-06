import React from 'react';
import { ExpertList } from '@/Sections/OurExperts';
import { FeaturedCaseStudies } from '@/page/CaseStudies';
import { Link } from 'react-router-dom';
import { RoutePaths } from '@/router/RoutePaths';

const webDevServices = [
  {
    icon: 'faChartLineUp',
    title: 'Scale apps',
    text: 'Scale your app to match the needs of your business. Handle more users, more traffic, and more complex integrations.',
  },
  {
    icon: 'faGaugeCircleBolt',
    title: 'Performance boost',
    text: 'Turn your solution into a high-performance application. We know all the tricks in the book. No more loading screens and long waiting times.',
  },
  {
    icon: 'faChartPieSimpleCircleDollar',
    title: 'Cost optimization',
    text: 'Reduce Cloud, DevOps, and Database costs. Get the right solution and optimized set of resources for your business.',
  },
  {
    icon: 'faUserGroupSimple',
    title: 'Specialist allocation',
    text: 'Empower your team with dedicated Meteor experts. Whether you require a full-time resource or hourly support, we have the right talent to tackle your needs.',
  },
];

const MeteorService = ({ toggleContactUs }) => (
  <>
    <section data-id="hero" className="sm:px-4">
      <div className="mx-auto max-w-uwide flex flex-center flex-col bg-coral-300 bg-service-meteor sm:rounded-8 lg:h-[500px] xl:h-[620px]">
        <div className="container 2xl:max-w-default text-white text-center py-16 px-4">
          <h1 className="text-h3 md:text-h2 lg:text-h1 font-bold mb-4">
            Meteor services
          </h1>
          <h6 className="text-p lg:text-h6 mb-8 max-w-[700px] mx-auto">
            Over 10 years of experience, core contributors, former Meteor CEO,
            and a certified partner. We are the leading Meteor experts in the
            world.
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
        Meteor specific services
      </h2>
      <h6 className="text-p md:text-h6 mb-14 max-w-small">
        We've got your app covered in every way. Performance upgrades, cut
        costs, and ensure smooth operation with our expertise. Whether you need
        scaling, optimization, or maintenance, we've got your back.
      </h6>
    </div>
    <section data-id="service-list" className="px-4 lg:px-8 mb-24">
      <div className="container 2xl:max-w-default mx-auto">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        <hr className="my-12 border-neutral-800" />
        <div className="flex gap-12 flex-col lg:flex-row">
          <div
            data-id="meteor-services-title"
            className="shrink-0 grow-0 lg:basis-[360px] xl:basis-[460px]"
          >
            <h3 className="text-h3 text-neutral-300 font-semibold mb-2">
              Meteor version upgrade
            </h3>
            <h6 className="text-p md:text-h6 text-neutral-500 mb-6">
              Keeping your Meteor app updated is crucial, especially with Meteor
              3.0 on the horizon.
            </h6>
          </div>
          <div data-id="meteor-services-list" className="flex-auto">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <li>
                <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                  Expert Migration Services
                </h5>
                <p className="text-p text-neutral-500">
                  Leverage our expertise in migrating your app efficiently and
                  securely, with insights from our collaboration with the Meteor
                  core team.
                </p>
              </li>
              <li>
                <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                  Risks of Delaying Upgrades
                </h5>
                <p className="text-p text-neutral-500">
                  Learn about the potential risks associated with delaying
                  upgrades, including security vulnerabilities and compatibility
                  issues.
                </p>
              </li>
              <li>
                <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                  Seamless Transition
                </h5>
                <p className="text-p text-neutral-500">
                  Discover our approach to ensuring a smooth and hassle-free
                  transition to the latest Meteor version or any earlier version
                  as per your needs.
                </p>
              </li>
              <li>
                <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                  Meteor 3.0
                </h5>
                <p className="text-p text-neutral-500">
                  We worked closely with the Meteor core team from day 0 to move
                  away from Fibers, and we are helping companies find solutions
                  to expedite the migration process.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <div
      data-id="services-title"
      className="container mx-auto 2xl:max-w-default flex flex-col items-center text-center px-4 lg:px-8 mt-24"
    >
      <h2 className="text-h3 md:text-h2 mb-2 font-semibold text-neutral-300">
        Meteor experts and core contributors
      </h2>
      <h6 className="text-p md:text-h6 mb-14 max-w-small">
        Filipe Nevola, our CEO, used to run Meteor and is now a Meteor
        Ambassador. Plus, three of our devs are Meteor core contributors shaping
        and enhancing this framework with their expertise.
      </h6>

      <div className="max-w-[800px] w-full">
        <div className="flex gap-8 flex-col sm:flex-row">
          <ul className="shrink-0 grow-0">
            <ExpertList showOnly="ceo" />
          </ul>
          <div className="mx-auto text-left">
            {/* <FontAwesomeIcon
              icon={faQuoteLeft}
              className="text-neutral-300 h-8 w-8 mb-4"
            /> */}
            <h6
              data-id="cs-testimonial"
              className="text-h6 text-neutral-300 mb-4"
            >
              I began my career as a Java developer but later shifted my focus
              to Javascript. Since then, I've worked on over 30 projects with
              Meteor. I've worn multiple hats, from Advocate to CTO and CEO at
              Meteor Software. Now, at Quave, I continue to use Meteor in the
              majority of my projects.
            </h6>
            <h6 className="text-h6">
              — Filipe Nevola, Quave CEO and Meteor ex-CEO
            </h6>
          </div>
        </div>

        <hr className="my-12 border-neutral-800" />

        <ul id="our-experts" className="grid grid-cols-1 xsm:grid-cols-3 gap-8">
          <ExpertList showOnly="meteor" showDescription />
        </ul>
      </div>
    </div>

    <section className="lg:px-4 mt-24">
      <div className="mx-auto max-w-uwide flex flex-center flex-col bg-neutral-900 lg:h-[420px] xl:h-[470px] 2xl:h-[538px] px-4 lg:px-12 py-12 lg:py-0 lg:rounded-8 relative">
        <div className="container 2xl:max-w-default mx-auto flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
          <div className="flex flex-col gap-6 text-left lg:pr-[590px] xl:pr-[680px] 2xl:pr-[780px]">
            <Link
              to={RoutePaths.CASE_STUDY_METEOR}
              className="text-h4 xl:text-h3 text-neutral-300 hover:text-primary-300 font-semibold"
            >
              Removing Fibers for MeteorJS. A successful long-term collaboration
            </Link>
            <div className="flex flex-col gap-2">
              <p className="text-p">
                "I've known Quave for a long time, so I was confident they would
                do a great job and support our team with these challenging
                demands. Their expertise with our stack and alignment with our
                long-term vision for Meteor was essential for the success of the
                operation."
              </p>
              <div className="flex gap-2">
                <img
                  className="h-[40px] w-[40px] rounded-full"
                  src="/images/case-study-meteor-client.jpg"
                  alt=""
                />
                <div className="flex flex-col">
                  <h5 className="text-h6 text-neutral-300 font-semibold">
                    Frederico Maia
                  </h5>
                  <p className="text-small">Meteor CEO</p>
                </div>
              </div>
            </div>
            <Link
              to={RoutePaths.CASE_STUDY_METEOR}
              className="text-primary-300 hover:text-primary-400"
            >
              Read Case Study →
            </Link>
          </div>
          <div className="hidden lg:block absolute right-2 bottom-0 h-full">
            <img
              className="w-auto lg:h-full"
              src="/images/case-study-meteor-1.jpg"
              srcSet="/images/case-study-meteor-1.jpg 1x, /images/case-study-meteor-1@2x.jpg 2x"
              alt="Meteor"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="px-4 lg:px-8 mt-24">
      <div className="container 2xl:max-w-default mx-auto flex gap-6 sm:gap-12 flex-col lg:flex-row">
        <div
          data-id="meteor-services-title"
          className="shrink-0 grow-0 lg:basis-[360px] xl:basis-[460px]"
        >
          <h3 className="text-h3 text-neutral-300 font-semibold mb-2">
            Why develop your Meteor app with Quave?
          </h3>
          <h6 className="text-p md:text-h6 text-neutral-500 mb-6">
            Our services enhance Meteor app development with pre-built features,
            a supportive community, performance optimization, and security,
            ensuring efficient updates, real-time capabilities, and easy
            integration into the Meteor ecosystem.
          </h6>
        </div>
        <div className="flex-auto">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            <li>
              <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                In-depth knowledge
              </h5>
              <p className="text-p text-neutral-500">
                Led by the former CEO of Meteor, we offer valuable insights into
                Meteor's capabilities and future direction.
              </p>
            </li>
            <li>
              <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                Core contributors
              </h5>
              <p className="text-p text-neutral-500">
                With core Meteor contributors, we influence and shape the
                platform, staying current with the latest features and best
                practices.
              </p>
            </li>
            <li>
              <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                Trusted partner
              </h5>
              <p className="text-p text-neutral-500">
                We're proud to be Meteor's trusted partner, recognized for our
                deep dedication to Meteor's ecosystem and commitment to
                excellence.
              </p>
            </li>
            <li>
              <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                50+ projects delivered
              </h5>
              <p className="text-p text-neutral-500">
                We've delivered over 50 Meteor projects, consistently exceeding
                client expectations. Our history with Meteor speaks for itself.
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
        Meteor services success stories
      </h2>
      <h6 className="text-p md:text-h6 mb-14 max-w-small">
        Learn why companies trust Quave to build and improve their products.
      </h6>
    </div>
    <section data-id="cs-featured-list" className="mb-24 px-4">
      <FeaturedCaseStudies selectedCS={['sostena', 'lempire', 'pathable']} />
    </section>
  </>
);
export const MeteorServicePage = ({ ...rest }) => <MeteorService {...rest} />;
