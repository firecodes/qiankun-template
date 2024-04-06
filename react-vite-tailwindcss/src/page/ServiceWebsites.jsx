import React from 'react';
const webDevServices = [
  {
    icon: 'faBrush',
    title: 'Design',
    text: 'Get custom, mobile-responsive websites designed to meet your business goals and boost your digital marketing efforts.',
  },
  {
    icon: 'faCode',
    title: 'Development',
    text: 'We’ll convert any designs we create into a fully functional, responsive websites.',
  },
  {
    icon: 'faCloud',
    title: 'Cloud hosting',
    text: 'You need a secure, trustworthy company to host your new website. We have our own Cloud hosting company, zCloud. Your website is in safe hands.',
  },
  {
    icon: 'faWrench',
    title: 'Maintenance',
    text: "Whether it's maintaining, updating, or adding new features to your existing website, you can rely on our dedicated team.",
  },
  {
    icon: 'faChartLineUp',
    title: 'Conversion rate optimization',
    text: "Drive more visitors to the sales funnel's end and boost your conversion rate with our assistance.",
  },
  {
    icon: 'faWordpress',
    title: 'WordPress',
    text: 'We rely on WordPress as our primary CMS for its proficiency, versatility, stability, and speed.',
  },
];

const MarketingWebsitesService = ({ toggleContactUs }) => (
  <>
    <section data-id="hero" className="sm:px-4">
      <div className="mx-auto max-w-uwide flex flex-center flex-col bg-amethyst-300 bg-service-other sm:rounded-8 lg:h-[500px] xl:h-[620px]">
        <div className="container 2xl:max-w-default text-white text-center py-16 px-4">
          <h1 className="text-h3 md:text-h2 lg:text-h1 font-bold mb-4">
            Marketing Websites
          </h1>
          <h6 className="text-p lg:text-h6 mb-8 max-w-[700px] mx-auto">
            Elevate your brand with our expertly crafted marketing websites in
            React or WordPress for stunning design and UX.
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
        We can handle a project from start to finish or collaborate with your
        product or engineering team on a continuous engagement with a dedicated
        team of experts.
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
            Why trust Quave with your marketing website?
          </h3>
          <h6 className="text-p md:text-h6 text-neutral-500 mb-6">
            We have experienced product design veterans specializing in
            user-friendly, holistic solutions, with extensive expertise in
            complex websites, and front-end development.
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
                Tons of experience creating digital products
              </h5>
              <p className="text-p text-neutral-500">
                Extensive expertise in creating, maintaining, and optimizing
                complex design products.
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
  </>
);
export const MarketingWebsitesServicePage = ({ ...rest }) => (
  <MarketingWebsitesService {...rest} />
);
