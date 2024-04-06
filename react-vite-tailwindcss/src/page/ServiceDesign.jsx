import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FeaturedCaseStudies } from '@/page/CaseStudies';
import { RoutePaths } from '@/router/RoutePaths';

const webDevServices = [
  {
    icon: 'faDesktop',
    title: 'Web app design',
    text: 'We craft visually engaging and functional web applications that captivate users and drive results, ensuring a seamless online experience.',
  },
  {
    icon: 'faMobile',
    title: 'Mobile app design',
    text: 'From iOS to Android, we design mobile apps that combine aesthetics and functionality, providing a user-friendly interface that engages your audience.',
  },
  {
    icon: 'faTableTree',
    title: 'Design systems',
    text: 'We create comprehensive design systems to maintain visual consistency and efficiency across your digital products, resulting in a unified brand identity.',
  },
  {
    icon: 'faArrowsTurnToDots',
    title: 'Prototyping & wireframing',
    text: 'Bring your digital concepts to life with interactive prototypes, enabling early feedback and informed design decisions.',
  },
  {
    icon: 'faSearch',
    title: 'UX research',
    text: 'We inform our designs with user insights and validate our design decisions, discover user needs, and create better, more user-centered products.',
  },
  {
    icon: 'faHandshake',
    title: 'Design consultation',
    text: 'We collaborate to assess your needs, offer tailored design advice, and align digital strategies with your goals.',
  },
];

const featuredWork = [
  {
    id: 'pathable',
    title: <>"Talk now" for Pathable's attendee facing app</>,
    description:
      'A featured designed to facilitate communication between virtual trade show attendees and booth staff members.',
    company: 'Pathable',
    link: RoutePaths.CASE_STUDY_PATHABLE,
    video: '/images/case-study-pathable-2.mp4#t=0.001',
  },
  {
    id: 'zcloud',
    title: <>"Apply changes" for Quave's Cloud hosting services zCloud</>,
    description:
      'We simplified app deployment and changes review with a feature that prevents misconfigurations.',
    company: 'zCloud',
    link: RoutePaths.CASE_STUDY_ZCLOUD,
    video: '/images/case-study-zcloud-4.mp4#t=0.001',
  },
  {
    id: 'sostena',
    title: <>"Sales orders" for Sostena's main product ProducePlan</>,
    description:
      'A feature created to help track and manage sales orders, estimate freight costs in ProducePlan.',
    company: 'Sostena',
    link: RoutePaths.CASE_STUDY_SOSTENA,
    video: '/images/case-study-sostena-3.mp4#t=0.001',
  },
];

const DesignService = ({ toggleContactUs }) => {
  const [currentWork, setCurrentWork] = useState(featuredWork[0]);
  return (
    <>
      <section data-id="hero" className="sm:px-4">
        <div className="mx-auto max-w-uwide flex flex-center flex-col bg-accent-300 bg-service-design sm:rounded-8 lg:h-[500px] xl:h-[620px]">
          <div className="container 2xl:max-w-default text-white text-center py-16 px-4">
            <h1 className="text-h3 md:text-h2 lg:text-h1 font-bold mb-4">
              Product Design
            </h1>
            <h6 className="text-p lg:text-h6 mb-8 max-w-[700px] mx-auto">
              Using human-centered design tools and proper research, we create
              digital products that help organizations enhance the value they
              provide to people.
            </h6>
            <button
              className="btn-primary btn-primary_large text-accent-300 bg-white hover:bg-white_A92"
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
          Crafting user-friendly digital solutions with extensive experience in
          design, informed by user insights, validated through real tests, and
          prototyped for early feedback.
        </h6>
      </div>
      <section data-id="service-list" className="px-4 lg:px-8 mb-24">
        <div className="container 2xl:max-w-default mx-auto">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webDevServices.map(({ icon, title, text }, index) => (
              <li key={index}>
                {/* <FontAwesomeIcon
                  icon={icon}
                  className="text-accent-300 h-10 w-10 mb-4"
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
        data-id="our-process-title"
        className="container mx-auto 2xl:max-w-default flex flex-col items-center text-center px-4 lg:px-8 mt-24"
      >
        <h2 className="text-h3 md:text-h2 mb-2 font-semibold text-neutral-300">
          Our design process
        </h2>
        <h6 className="text-p md:text-h6 mb-14 max-w-small">
          Dive into our double diamond design process. Our framework for
          crafting exceptional, design solutions.
        </h6>
      </div>
      <section data-id="our-process" className="px-4 lg:px-8 mb-24">
        <div className="container mx-auto">
          <img
            src="/images/illustration-design-diagram.svg"
            className="mx-auto"
            alt="Double diamond design process"
          />
        </div>
      </section>

      <div
        data-id="feature-work-title"
        className="container mx-auto 2xl:max-w-default flex flex-col items-center text-center px-4 lg:px-8 mt-24"
      >
        <h2 className="text-h3 md:text-h2 mb-2 font-semibold text-neutral-300">
          Feature work overview
        </h2>
        <h6 className="text-p md:text-h6 mb-14 max-w-small">
          Explore a brief overview of features we designed and implemented for
          our clients.
        </h6>
      </div>
      <section
        data-id="feature-work"
        className="px-4 lg:px-8 mb-24 hidden lg:block"
      >
        <div className="container mx-auto 2xl:max-w-default">
          <div className="grid grid-cols-3 gap-4 mb-4">
            {featuredWork.map((work) => {
              const { id, title, description, company, link } = work;
              const isCurrent = currentWork.id === id;

              return (
                <div
                  key={id}
                  onClick={() => setCurrentWork(work)}
                  className={`${isCurrent ? 'border-accent-300' : 'border-neutral-800'
                    } border hover:border-accent-300 px-6 py-5 rounded-6 grid grid-cols-[18px_1fr] gap-4 cursor-pointer`}
                >
                  <div className="pt-1">
                    <i
                      className={`${isCurrent
                        ? 'bg-accent-300'
                        : 'border border-neutral-500'
                        } block w-4 h-4 rounded-full`}
                    ></i>
                  </div>
                  <div>
                    <h5 className="text-h6 lg:text-h5 font-semibold text-neutral-300 mb-2">
                      {title}
                    </h5>
                    <p className="text-p mb-2">{description}</p>
                    <small className="text-small text-neutral-600">
                      Read more about it in the{' '}
                      <Link
                        className="text-primary-300 hover:text-primary-400"
                        to={link}
                      >
                        {company} case study
                      </Link>
                    </small>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="rounded-6 border border-accent-300 overflow-hidden">
            <video
              className="w-full"
              src={`${currentWork.video}#t=0.001`}
              controls
              muted
            ></video>
          </div>
        </div>
      </section>

      <section
        data-id="feature-work-mobile"
        className="px-4 lg:px-8 mb-24 block lg:hidden"
      >
        <div className="container mx-auto 2xl:max-w-default">
          <div className="grid grid-cols-1 gap-4 mb-4">
            {featuredWork.map((work) => {
              const { id, title, description, company, video, link } = work;
              const isCurrent = currentWork.id === id;

              return (
                <div
                  key={id}
                  onClick={() => setCurrentWork(work)}
                  className={`${isCurrent ? 'border-accent-300' : 'border-neutral-800'
                    } border p-4 sm:p-6 rounded-6 cursor-pointer`}
                >
                  <div className="grid grid-cols-[1fr_18px] gap-4">
                    <div>
                      <h5 className="text-h6 lg:text-h5 font-semibold text-neutral-300 mb-2">
                        {title}
                      </h5>
                      <p className="text-p mb-4">{description}</p>
                      <small className="text-small text-neutral-600 block">
                        Read more about it in the{' '}
                        <Link
                          className="text-primary-300 hover:text-primary-400"
                          to={link}
                        >
                          {company} case study
                        </Link>
                      </small>
                    </div>
                    <div className="pt-0.5">
                      {/* <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`${isCurrent ? 'rotate-180' : ''
                          } text-neutral-500 h-5 w-5`}
                      /> */}
                    </div>
                  </div>
                  <video
                    className={`${isCurrent ? '' : 'hidden'} rounded-4 mt-6`}
                    src={`${video}#t=0.001`}
                    controls
                    muted
                  ></video>
                </div>
              );
            })}
          </div>
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
          Expert leadership and cutting-edge technologies. Discover why
          partnering with us is the smart choice for your digital success.
        </h6>
      </div>
      <section data-id="service-list" className="px-4 lg:px-8 mb-24">
        <div className="container 2xl:max-w-default mx-auto">
          <h5 className="text-h5 text-neutral-300 font-semibold text-center">
            Our head of design:
          </h5>
          <div className="flex flex-col sm:flex-row items-center border border-neutral-700 rounded-6 p-4 max-w-[640px] gap-4 mx-auto mt-4">
            <img
              className="rounded-4 shrink-0 grow-0"
              src="/images/expert-adrian-large.jpg"
              alt="Adrian Pako"
            />
            <div className="text-center sm:text-left">
              <h5 className="text-h5 font-semibold text-neutral-300">
                Adrian Pako
              </h5>
              <p className="text-p">Senior Product Designer</p>
              <p className="text-p mt-2">
                Adrian, a veteran digital product designer with 15+ years of
                global experience. He’s known for simplifying complexities with
                an imaginative, organized, and adaptable style. A strong
                communicator and self-starter, excelling in remote,
                cross-functional collaborations.
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
              Why let Quave do product design for you?
            </h3>
            <h6 className="text-p md:text-h6 text-neutral-500 mb-6">
              We have experienced product design veterans specializing in
              user-friendly, holistic solutions, with extensive expertise in
              complex design systems, and front-end development.
            </h6>
          </div>
          <div className="flex-auto">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              <li>
                <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                  Product design veterans
                </h5>
                <p className="text-p text-neutral-500">
                  Experienced and seasoned product design professionals with a
                  track record of successful projects.
                </p>
              </li>
              <li>
                <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                  Simple, user-friendly, solutions
                </h5>
                <p className="text-p text-neutral-500">
                  We specialize in creating straightforward and user-centric
                  solutions.
                </p>
              </li>
              <li>
                <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                  Better, user-centered solutions
                </h5>
                <p className="text-p text-neutral-500">
                  We're dedicated to enhancing user experiences through design,
                  resulting in user-focused solutions.
                </p>
              </li>
              <li>
                <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                  Holistic approach to design
                </h5>
                <p className="text-p text-neutral-500">
                  Our approach encompasses all aspects of design, ensuring a
                  comprehensive and integrated solution.
                </p>
              </li>
              <li>
                <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                  Tons of experience with complex design systems
                </h5>
                <p className="text-p text-neutral-500">
                  Extensive expertise in creating, maintaining, and optimizing
                  complex design systems.
                </p>
              </li>
              <li>
                <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                  Front-end development
                </h5>
                <p className="text-p text-neutral-500">
                  Crafting the visual and interactive elements of your digital
                  products with expertise in front-end development.
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
          Product design success stories
        </h2>
        <h6 className="text-p md:text-h6 mb-14 max-w-small">
          Learn why companies trust Quave to build and improve their products.
        </h6>
      </div>
      <section data-id="cs-featured-list" className="mb-24 px-4">
        <FeaturedCaseStudies
          selectedCS={['zcloud', 'pathable', 'sostena']}
          showFeaturedImage
        />
      </section>
    </>
  );
};
export const DesignServicePage = ({ ...rest }) => <DesignService {...rest} />;
