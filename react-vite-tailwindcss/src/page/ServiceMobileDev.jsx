import React from 'react';
import { FeaturedCaseStudies } from '@/page/CaseStudies';
const webDevServices = [
  {
    icon: 'faAndroid',
    title: 'Android',
    text: 'Create tailored Android native apps. We handle the entire process, from development to Play Store publication, ensuring a smooth journey for you app.',
  },
  {
    icon: 'faApple',
    title: 'iOS',
    text: 'Crafting native iOS apps with Swift, we design high-quality and user-friendly apps that enhance your mobile presence and success.',
  },
  {
    icon: 'faMobile',
    title: 'Hybrid Apps',
    text: 'One code, several platforms. We develop hybrid apps that function across iOS, Android, and web platforms. We utilize technologies like Cordova/Capacitor, Flutter, or React-Native.',
  },
  {
    icon: 'faPuzzle',
    title: 'Integration',
    text: 'Assisting in seamless integration, our aim is to link your mobile app with various systems and platforms, ensuring a connected digital experience.',
  },
  {
    icon: 'faBrush',
    title: 'Design',
    text: "Elevate your mobile app's appearance and functionality. We integrate custom features and redesign for improved aesthetics, navigation, and mobile responsiveness.",
  },
  {
    icon: 'faWrench',
    title: 'Maintenance',
    text: 'Count on us to support and maintain your mobile app, guaranteeing peak performance across all devices so that you can stay ahead of the curve.',
  },
];

const MobileDevService = ({ toggleContactUs }) => (
  <>
    <section data-id="hero" className="sm:px-4">
      <div className="mx-auto max-w-uwide flex flex-center flex-col bg-amethyst-300 bg-service-mobile-dev sm:rounded-8 lg:h-[500px] xl:h-[620px]">
        <div className="container 2xl:max-w-default text-white text-center py-16 px-4">
          <h1 className="text-h3 md:text-h2 lg:text-h1 font-bold mb-4">
            Mobile app development
          </h1>
          <h6 className="text-p lg:text-h6 mb-8 max-w-[700px] mx-auto">
            Our unique blend of experienced developers, domain knowledge, and
            design prowess enables us to build scalable cross-platform mobile
            solutions.
          </h6>
          <button
            className="btn-primary btn-primary_large text-amethyst-300 bg-white hover:bg-white_A92"
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
        Enhance your mobile strategy with our proficiency in designing,
        developing, upgrading, refining, integrating, optimizing, and crafting
        innovative mobile applications.
      </h6>
    </div>
    <section data-id="service-list" className="px-4 lg:px-8 mb-24">
      <div className="container 2xl:max-w-default mx-auto">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
          Our head of mobile app development:
        </h5>
        <div className="flex flex-col sm:flex-row items-center border border-neutral-700 rounded-6 p-4 max-w-[640px] gap-4 mx-auto mt-4">
          <img
            className="rounded-4 shrink-0 grow-0"
            src="/images/expert-matheus-large.jpg"
            alt="Matheus Camargo de Castro"
          />
          <div className="text-center sm:text-left">
            <h5 className="text-h5 font-semibold text-neutral-300">
              Matheus Camargo de Castro
            </h5>
            <p className="text-p">Lead Developer</p>
            <p className="text-p mt-2">
              With 5+ years of experience, Matheus excels in web and mobile
              development. He delivers quality code, works fast, loves a
              challenge, learns quick and can adapt to any technology stack. In
              addition to he's work at Quave he's also an open source
              contributor.
            </p>
          </div>
        </div>
        <h5 className="text-h5 text-neutral-300 font-semibold text-center mt-10">
          Technologies we master:
        </h5>

        <div className="flex flex-wrap items-center justify-center bg-neutral-900 gap-10 py-8 px-4 rounded-6 mt-4">
          <img src="/images/service-logo-android.png" alt="Android" />
          <img src="/images/service-logo-ios.png" alt="iOS" />
          <img src="/images/service-logo-react-native.png" alt="React Native" />
          <img src="/images/service-logo-cordova.png" alt="Cordova" />
          <img src="/images/service-logo-flutter.png" alt="Flutter" />
          <img src="/images/service-logo-swift.png" alt="Swift" />
          <img src="/images/service-logo-kotlin.png" alt="Kotlin" />
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
            Why develop your mobile app with Quave?
          </h3>
          <h6 className="text-p md:text-h6 text-neutral-500 mb-6">
            Experience-driven guidance, rapid solutions for tight deadlines,
            up-to-date tech expertise, and unwavering results-focus for
            long-term success.
          </h6>
        </div>
        <div className="flex-auto">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            <li>
              <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                Guidance
              </h5>
              <p className="text-p text-neutral-500">
                Benefit from our years of experience as we guide you towards the
                most effective approach for your project's success.
              </p>
            </li>
            <li>
              <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                Speed
              </h5>
              <p className="text-p text-neutral-500">
                Need speedy solutions? We're here to meet your tight deadlines
                with efficiency, ensuring your goals are reached on time.
              </p>
            </li>
            <li>
              <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                Up-to-date
              </h5>
              <p className="text-p text-neutral-500">
                We stay current with the latest tech trends, ensuring your
                ability to provide the ultimate user experience.
              </p>
            </li>
            <li>
              <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                Results
              </h5>
              <p className="text-p text-neutral-500">
                At our core, we prioritize delivering results that endure. We're
                fully dedicated to securing your long-term success.
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
        Mobile development success stories
      </h2>
      <h6 className="text-p md:text-h6 mb-14 max-w-small">
        Learn why companies trust Quave to build and improve their products.
      </h6>
    </div>
    <section data-id="cs-featured-list" className="mb-24 px-4">
      <FeaturedCaseStudies selectedCS={['petparker', 'bemarke', 'sneakpeak']} />
    </section>
  </>
);
export const MobileDevServicePage = ({ ...rest }) => (
  <MobileDevService {...rest} />
);
