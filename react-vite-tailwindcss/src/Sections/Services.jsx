import { RoutePaths } from '@/router/RoutePaths';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      <div
        data-id="services-title"
        className="container mx-auto 2xl:max-w-default flex flex-col items-center text-center px-4 lg:px-8"
      >
        <h2 className="text-h3 md:text-h2 mb-2 font-semibold text-neutral-300">
          Services
        </h2>
        <h6 className="text-p md:text-h6 mb-14 max-w-small">
          With deep experience in web, mobile, and back-end platforms, our
          multidisciplinary team can design, develop, and maintain projects of
          any size or complexity.
        </h6>
      </div>
      <section data-id="services" className="px-4 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 container mx-auto mb-4">
          <div data-id="service-web-dev" className="bg-neutral-900 rounded-8">
            <Link
              className="bg-web-dev rounded-8 h-[260px] block transition-transform hover:scale-105"
              to={RoutePaths.SERVICES_WEB_DEV}
            >
              <div className="bg-web-dev-shapes rounded-8 py-8 flex flex-center">
                <img
                  src="/images/illustration-web-dev.svg"
                  alt="Web development services"
                />
              </div>
            </Link>
            <div className="p-8">
              <Link
                className="text-h6 text-neutral-300 font-semibold mb-2 inline-block hover:text-primary-300"
                to={RoutePaths.SERVICES_WEB_DEV}
              >
                Web App Development
              </Link>
              <p className="text-p mb-2">
                Leveraging modern approaches to web development, we bring
                front-end, back-end, and architecture together to meet your
                business needs.
              </p>
              <Link
                className="text-primary-300 hover:text-primary-400"
                to={RoutePaths.SERVICES_WEB_DEV}
              >
                Read more &rarr;
              </Link>
            </div>
          </div>

          <div
            data-id="service-mobile-dev"
            className="bg-neutral-900 rounded-8"
          >
            <Link
              className="bg-mobile-dev rounded-8 h-[260px] block transition-transform hover:scale-105"
              to={RoutePaths.SERVICES_MOBILE_DEV}
            >
              <div className="bg-mobile-dev-shapes rounded-8 py-8 flex flex-center">
                <img
                  src="/images/illustration-mobile-dev.svg"
                  alt="Mobile development services"
                />
              </div>
            </Link>
            <div className="p-8">
              <Link
                to={RoutePaths.SERVICES_MOBILE_DEV}
                className="text-h6 text-neutral-300 hover:text-primary-300 inline-block font-semibold mb-2"
              >
                Mobile Development
              </Link>
              <p className="text-p mb-2">
                Our unique blend of experienced JavaScript developers, domain
                knowledge, and design prowess enables us to build scalable
                cross-platform mobile solutions.
              </p>
              <Link
                className="text-primary-300 hover:text-primary-400"
                to={RoutePaths.SERVICES_MOBILE_DEV}
              >
                Read more &rarr;
              </Link>
            </div>
          </div>

          <div data-id="service-ui-ux" className="bg-neutral-900 rounded-8">
            <Link
              className="bg-ui-ux rounded-8 h-[260px] block transition-transform hover:scale-105"
              to={RoutePaths.SERVICES_DESIGN}
            >
              <div className="bg-ui-ux-shapes rounded-8 py-8 flex flex-center">
                <img
                  src="/images/illustration-ui-ux.svg"
                  alt="UI/UX services"
                />
              </div>
            </Link>
            <div className="p-8">
              <Link
                to={RoutePaths.SERVICES_DESIGN}
                className="text-h6 text-neutral-300 hover:text-primary-300 inline-block font-semibold mb-2"
              >
                Product Design
              </Link>
              <p className="text-p mb-2">
                Using human-centered design tools and proper research, we create
                digital products that help organizations enhance the value they
                provide to people.
              </p>
              <Link
                className="text-primary-300 hover:text-primary-400"
                to={RoutePaths.SERVICES_DESIGN}
              >
                Read more &rarr;
              </Link>
            </div>
          </div>

          <div
            data-id="service-consuilting"
            className="bg-neutral-900 rounded-8"
          >
            <Link
              to={RoutePaths.SERVICES_CONSULTING}
              className="bg-consulting rounded-8 h-[260px] block transition-transform hover:scale-105"
            >
              <div className="bg-consulting-shapes rounded-8 py-8 flex flex-center">
                <img
                  src="/images/illustration-consulting.svg"
                  alt="Consulting services services"
                />
              </div>
            </Link>
            <div className="p-8">
              <Link
                to={RoutePaths.SERVICES_CONSULTING}
                className="text-h6 text-neutral-300 hover:text-primary-300 inline-block font-semibold mb-2"
              >
                Consulting
              </Link>
              <p className="text-p mb-2">
                Explore tailored solutions for scalability, performance
                optimization, and gaining a competitive edge to meet your unique
                business needs.
              </p>
              <Link
                className="text-primary-300 hover:text-primary-400"
                to={RoutePaths.SERVICES_CONSULTING}
              >
                Read more &rarr;
              </Link>
            </div>
          </div>
        </div>
        <div
          data-id="services-small"
          className="container grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto mb-4"
        >
          <div
            data-id="service-small-performance-analysis"
            className="bg-neutral-900 rounded-8 flex flex-col items-start p-8 grow"
          >
            <Link
              to={RoutePaths.SERVICES_PERFORMANCE_ANALYSIS}
              className="text-h6 text-neutral-300 hover:text-primary-300 inline-block font-semibold mb-2"
            >
              Performance Analysis
            </Link>
            <p className="text-p mb-2">
              Understand how your app handles stress, if it can manage more
              users and traffic well, and ways to optimize your resources.
            </p>
            <Link
              className="text-primary-300 hover:text-primary-400"
              to={RoutePaths.SERVICES_PERFORMANCE_ANALYSIS}
            >
              Read more &rarr;
            </Link>
          </div>
          <div
            data-id="service-small-cloud-solutions"
            className="bg-neutral-900 rounded-8 flex flex-col items-start p-8 grow"
          >
            <Link
              to={RoutePaths.SERVICES_DEVOPS}
              className="text-h6 text-neutral-300 hover:text-primary-300 font-semibold mb-2"
            >
              DevOps
            </Link>
            <p className="text-p mb-2">
              CI/CD setup, end-to-end testing, infra-as-a-code, and much more:
              streamline your software delivery and deployment.
            </p>
            <Link
              className="text-primary-300 hover:text-primary-400"
              to={RoutePaths.SERVICES_DEVOPS}
            >
              Read more &rarr;
            </Link>
          </div>
          <div
            data-id="service-small-marketing"
            className="bg-neutral-900 rounded-8 flex flex-col items-start p-8 grow"
          >
            <Link
              to={RoutePaths.SERVICES_MARKETING_WEBSITES}
              className="text-h6 text-neutral-300 hover:text-primary-300 font-semibold mb-2"
            >
              Marketing Websites
            </Link>
            <p className="text-p mb-2">
              Elevate your brand with our expertly crafted marketing websites in
              React or WordPress for stunning design and UX.
            </p>
            <Link
              className="text-primary-300 hover:text-primary-400"
              to={RoutePaths.SERVICES_MARKETING_WEBSITES}
            >
              Read more &rarr;
            </Link>
          </div>
        </div>
        <div
          data-id="services-small"
          className="container grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto"
        >
          <div
            data-id="service-small-meteor"
            className="bg-neutral-900 rounded-8 flex flex-col items-start p-8 grow"
          >
            <Link
              to={RoutePaths.SERVICES_METEOR}
              className="text-h6 text-neutral-300 hover:text-primary-300 inline-block font-semibold mb-2"
            >
              Meteor services
            </Link>
            <p className="text-p mb-2">
              Over 10 years of experience, core contributors, former Meteor CEO,
              and a certified partner. We are the leading Meteor experts in the
              world.
            </p>
            <Link
              className="text-primary-300 hover:text-primary-400"
              to={RoutePaths.SERVICES_METEOR}
            >
              Read more &rarr;
            </Link>
          </div>
          <div
            data-id="service-small-meteor"
            className="border-2 border-neutral-800 rounded-8 flex flex-col items-start p-8 grow"
          >
            <Link
              to={RoutePaths.SERVICES_METEOR}
              className="text-h6 text-neutral-300 hover:text-primary-300 inline-block font-semibold mb-2"
            >
              Cloud Hosting with zCloud
            </Link>
            <p className="text-p mb-2">
              Experience the flexibility and ease of Cloud hosting with amazing
              support.
            </p>
            <a
              className="text-primary-300 hover:text-primary-400"
              href="https://zcloud.ws/"
              target="_blank"
              rel="noreferrer"
            >
              Read more
              {/* <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="h-3 w-3 ml-2"
              /> */}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
