import { Link } from 'react-router-dom';
import { RoutePaths } from '@/router/RoutePaths';

const Footer = ({ toggleContactUs }) => {
  const peopleLinks = [
    {
      title: 'Filipe Névola',
      href: 'https://twitter.com/FilipeNevola',
    },
    {
      title: 'Rafael Braga',
      href: 'https://www.linkedin.com/in/rbraga1/',
    },
    {
      title: 'Adrian Pako',
      href: 'https://www.linkedin.com/in/adrianpako/',
    },
    {
      title: 'Matheus Castro',
      href: 'https://www.linkedin.com/in/matheus-camargo-de-castro-970902168/#',
    },
    {
      title: 'Edimar Cardoso',
      href: 'https://www.linkedin.com/in/edimar-cardoso-9656aa60/',
    },
  ];
  const companyLinks = [
    {
      title: 'About us',
      href: RoutePaths.ABOUT_US,
    },
    {
      title: 'Referral program',
      href: RoutePaths.REFERRAL,
    },
    {
      title: 'Careers - Open Positions',
      href: 'https://github.com/quavedev/join/blob/main/README.md',
    },
    {
      title: 'Twitter',
      href: 'https://twitter.com/quaveDev',
    },
  ];
  const servicesLinks = [
    {
      title: 'Web development',
      href: RoutePaths.SERVICES_WEB_DEV,
    },
    {
      title: 'Mobile development',
      href: RoutePaths.SERVICES_MOBILE_DEV,
    },
    {
      title: 'Product design',
      href: RoutePaths.SERVICES_DESIGN,
    },
    {
      title: 'Consulting',
      href: RoutePaths.SERVICES_CONSULTING,
    },
    {
      title: 'Performance analysis',
      href: RoutePaths.SERVICES_PERFORMANCE_ANALYSIS,
    },
    {
      title: 'DevOps',
      href: RoutePaths.SERVICES_DEVOPS,
    },
    {
      title: 'Marketing websites',
      href: RoutePaths.SERVICES_MARKETING_WEBSITES,
    },
    {
      title: 'Meteor',
      href: RoutePaths.SERVICES_METEOR,
    },
  ];
  const productLinks = [
    {
      title: 'zCloud - Cloud hosting',
      href: 'https://zcloud.ws',
    },
  ];
  const mediaLinks = [
    {
      title: 'AI Proof Dev',
      href: 'https://aiproofdev.com',
    },
    {
      title: 'CodeFTW',
      href: 'https://codeftw.dev',
    },
    {
      title: 'Quaverse Podcast',
      href: 'https://www.youtube.com/playlist?list=PLX9rGwtbT4CEEoe0rtuzYg1d3RDWF-o_5',
    },
    {
      title: 'YouTube',
      href: 'https://www.youtube.com/@QuaveDev',
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <>
      <div id="footer-cta" className="mb-20 sm:px-4">
        <div className="mx-auto max-w-uwide text-white text-center flex flex-center flex-col bg-sapphire-300 bg-footer-cta py-12 md:py-24 px-6 md:px-12 sm:rounded-8">
          <div className="container ">
            <h2 className="text-h3 md:text-h2 font-bold mb-4">
              Ready to talk to us about your project?
            </h2>
            <h6 className="text-p md:text-h6 mb-8 opacity-75">
              Drop us a line. Tell us about your project. We’ll get back to you
              in a flash.
            </h6>
            <button
              className="btn-primary btn-primary_large"
              onClick={toggleContactUs}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <footer className="px-4 lg:px-8 mb-12">
        <div className="container mx-auto 2xl:max-w-default flex justify-between flex-wrap">
          <ul className="basis-[40%] md:basis-auto mb-8">
            <li className="mb-4">
              <span className="font-semibold text-primary-300">Education</span>
            </li>
            {mediaLinks.map(({ href, title }) => (
              <li key={title} className="mb-4">
                <a
                  className="text-p hover:text-primary-300"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
          <ul className="basis-[40%] md:basis-auto mb-8">
            <li className="mb-4">
              <span className="font-semibold text-amethyst-300">Products</span>
            </li>
            {productLinks.map(({ href, title }) => (
              <li key={title} className="mb-4">
                <a
                  className="text-p hover:text-primary-300"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
          <ul className="basis-[40%] md:basis-auto mb-8">
            <li className="mb-4">
              <span className="font-semibold text-sapphire-300">People</span>
            </li>
            {peopleLinks.map(({ href, title }) => (
              <li key={title} className="mb-4">
                <a
                  className="text-p hover:text-primary-300"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
          <ul className="basis-[40%] md:basis-auto mb-8">
            <li className="mb-4">
              <span className="font-semibold text-coral-300">Company</span>
            </li>
            {companyLinks.map(({ href, title }) => (
              <li key={title} className="mb-4">
                {href.startsWith('http') ? (
                  <a
                    className="text-p hover:text-primary-300"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {title}
                  </a>
                ) : (
                  <Link className="text-p hover:text-primary-300" to={href}>
                    {title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <ul className="basis-[40%] md:basis-auto mb-8">
            <li className="mb-4">
              <span className="font-semibold text-accent-300">Services</span>
            </li>
            {servicesLinks.map(({ href, title }) => (
              <li key={title} className="mb-4">
                <Link className="text-p hover:text-primary-300" to={href}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
      <div className="px-4 lg:px-8 pb-12 ">
        <div className="container mx-auto 2xl:max-w-default flex flex-col sm:flex-row text-small">
          <p className="grow pb-4">
            © {currentYear} Quave. All rights reserved.
          </p>
          <ul className="flex items-center gap-2 pb-4">
            <li>
              <Link
                to={RoutePaths.TERMS_AND_CONDITIONS}
                className="text-small hover:text-primary-300"
              >
                Terms and Conditions
              </Link>
            </li>
            <li>|</li>
            <li>
              <Link
                to={RoutePaths.PRIVACY_POLICY}
                className="text-small hover:text-primary-300"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
