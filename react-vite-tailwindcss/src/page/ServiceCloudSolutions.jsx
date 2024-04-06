import React from 'react';
import { FeaturedCaseStudies } from '@/page/CaseStudies';
import * as env from '@/utils/env';


const webDevServices = [
  {
    icon: '',
    title: 'Cloud setup',
    text: 'Optimize the performance of your production and/or staging environments for peak efficiency.',
  },
  {
    icon: '',
    title: 'Cloud migration',
    text: 'Plan, design, and execute seamless cloud migrations from on-premises or between cloud platforms, minimizing downtime.',
  },
  {
    icon: '',
    title: 'Infrastructure-as-code',
    text: "Modernize your cloud infrastructure with Terraform, the market's most popular and well-supported infrastructure-as-code tool.",
  },
  {
    icon: '',
    title: 'Deploy automation',
    text: 'Automate application deployments in production and staging environments with CI jobs using Jenkins CI, Groovy scripts, shell scripts, Fastlane, and more.',
  },
  {
    icon: '',
    title: 'Cost optimization',
    text: 'Thoroughly analyze your cloud infrastructure to identify cost-saving opportunities.',
  },
  {
    icon: '',
    title: 'End-to-end tests setup',
    text: 'Conduct end-to-end tests with tools like Cypress and PlayWright, including full environment restoration.',
  },
  {
    icon: '',
    title: 'Backup automation',
    text: 'We can provide automated full and incremental backups solutions via Jenkins jobs or other tools for databases, like for example, MongoDB, PostgreSQL and MySQL.',
  },
  {
    icon: '',
    title: 'Monitoring',
    text: 'Monitor every aspect of your infrastructure, from server performance to database queries, using tools like DataDog (paid) or Prometheus/Grafana (free).',
  },
  {
    icon: '',
    title: 'CI / CD',
    text: 'Implement continuous integration and delivery/deployment for your code, streamlining processes and accelerating delivery.',
  },
];

const CloudSolutionsService = ({ toggleContactUs }) => (
  <>
    <section data-id="hero" className="sm:px-4">
      <div className="mx-auto max-w-uwide flex flex-center flex-col bg-amethyst-300 bg-service-other sm:rounded-8 lg:h-[500px] xl:h-[620px]">
        <div className="container 2xl:max-w-default text-white text-center py-16 px-4">
          <h1 className="text-h3 md:text-h2 lg:text-h1 font-bold mb-4">
            DevOps
          </h1>
          <h6 className="text-p lg:text-h6 mb-8 max-w-[700px] mx-auto">
            CI/CD setup, end-to-end testing, infra-as-a-code, and much more:
            streamline your software delivery and deployment.
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
        Elevate your cloud setup, migration, infrastructure-as-code, deploy
        automation, cost optimization, end-to-end testing, backup automation,
        monitoring, and CI/CD to boost efficiency and accelerate delivery.
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
          Our head of DevOps:
        </h5>
        <div className="flex flex-col sm:flex-row items-center border border-neutral-700 rounded-6 p-4 max-w-[640px] gap-4 mx-auto mt-4">
          <img
            className="rounded-4 shrink-0 grow-0"
            src="/images/expert-edimar-large.jpg"
            alt="Edimar Cardoso"
          />
          <div className="text-center sm:text-left">
            <h5 className="text-h5 font-semibold text-neutral-300">
              Edimar Cardoso
            </h5>
            <p className="text-p">Principal DevOps</p>
            <p className="text-p mt-2">
              A technology enthusiast with a talent for DevOps. He has been in
              the technology business since 2005 and his passion shines through
              in his work.
            </p>
          </div>
        </div>
        <h5 className="text-h5 text-neutral-300 font-semibold text-center mt-10">
          Technologies we master:
        </h5>

        <div className="flex flex-wrap items-center justify-center bg-neutral-900 gap-10 py-8 px-4 rounded-6 mt-4">
          <img src="/images/service-logo-kubernetes.png" alt="Kubernetes" />
          <img src="/images/service-logo-docker.png" alt="Docker" />
          <img src="/images/service-logo-zcloud.png" alt="zCloud" />
          <img src="/images/service-logo-aws.png" alt="AWS" />
          <img src="/images/service-logo-jenkins.png" alt="Jenkins" />
          <img src="/images/service-logo-terraform.png" alt="Terraform" />
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
            Why get Cloud solution from Quave?
          </h3>
          <h6 className="text-p md:text-h6 text-neutral-500 mb-6">
            From our own Cloud expertise to tailored solutions, our CEO's
            industry experience, and versatile team, we're your cloud partners
            for a perfect fit.
          </h6>
        </div>
        <div className="flex-auto">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            <li>
              <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                Skin in the game
              </h5>
              <p className="text-p text-neutral-500">
                Our expertise extends to our own cloud solution, zCloud. We
                possess comprehensive knowledge for achieving a top-tier cloud
                setup.
              </p>
            </li>
            <li>
              <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                Customized solutions
              </h5>
              <p className="text-p text-neutral-500">
                We tailor your cloud to align precisely with your budget
                constraints and business needs, ensuring a perfect fit.
              </p>
            </li>
            <li>
              <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                Industry Background
              </h5>
              <p className="text-p text-neutral-500">
                Our CEO formerly led a Cloud company listed on the Canadian
                stock market, adding a wealth of industry experience to our
                leadership.
              </p>
            </li>
            <li>
              <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                Versatile Competence
              </h5>
              <p className="text-p text-neutral-500">
                Our team's expertise spans from setting up cloud services for
                local solutions to supporting NBA events, showcasing our
                versatile capabilities.
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
        DevOps success stories
      </h2>
      <h6 className="text-p md:text-h6 mb-14 max-w-small">
        Learn why companies turn to Quave for their DevOps projects.
      </h6>
    </div>
    <section data-id="cs-featured-list" className="mb-24 px-4">
      <FeaturedCaseStudies
        selectedCS={['polidigital', 'bemarke', 'sneakpeak']}
      />
    </section>
  </>
);
export const CloudSolutionsServicePage = ({ ...rest }) => (
  <CloudSolutionsService {...rest} />
);
