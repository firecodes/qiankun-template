import React from 'react';
import { RoutePaths } from '@/router/RoutePaths';

export const sostenaContent = {
  id: 'sostena',
  title:
    'Enhanced performance and UX: ProducePlan gets a 90% boost in less than 3 weeks',
  featuredImageURL: '/images/case-study-sostena-1.jpg',
  featuredImageSet:
    '/images/case-study-sostena-1.jpg 1x, /images/case-study-sostena-1@2x.jpg 2x',
  featuredLogoURL: '/images/case-study-sostena-logo.png',
  authorName: 'Timothy Colin',
  authorPosition: 'Sostena CEO',
  authorPhotoURL: '/images/case-study-sostena-client.jpg',
  company: {
    name: 'Sostena',
    size: '11-50',
    industry: 'Farming',
    location: 'USA',
    description:
      "Sostena is building sustainable food systems by helping farmers optimize their water usage and providing water consumption reporting through ProducePlan's suite of IoT devices, reducing food waste through connecting the produce supply chain for better supply-chain planning via their core product, ProducePlan. ProducePlan already helps over 1,000 farms around the globe.",
  },
  productName: 'ProducePlan',
  productURL: 'https://produceplan.com/',
  services: 'Web Development, Product Design, Consulting',
  techStack: ['meteor', 'nodejs', 'blaze'],
  testimonial:
    'Quave has a ton of experience with Meteor. I was in a difficult position where our customers started complaining about the performance. After Quave came into the picture, the situation completely changed in a matter of weeks.',
  URL: RoutePaths.CASE_STUDY_SOSTENA,
  tags: [
    'agrotech',
    'web-dev',
    'mobile-dev',
    'design',
    'consulting',
    'dev-ops',
    'performance-analysis',
    'meteor',
  ],
  text: (
    <>
      <h4 className="text-h4 text-neutral-300 font-semibold mb-4">Overview</h4>
      <p className="text-p mb-4">
        ProducePlan is a cloud-based, specialty agriculture supply-chain
        planning platform enabling farmers (supply) to collaborate with their
        customers (demand) to derive efficient supply plans.
      </p>
      <p className="text-p mb-6">
        The system will create planting schedules, based on demand and on
        several other variables, including estimated predicted future harvest
        dates up to 5 years out. ProducePlan then puts together a reliable plan
        and alerts farmers of certain activities they should consider, for
        example watering. Each planting variety has specific characteristics
        that influence the schedule and these are all mapped into the platform
        by commodity/seed variety.
      </p>
      <p className="text-p mb-6">
        ProducePlan also allows users to connect to their farms and fields with
        IoT devices and track soil moisture, leaf wetness, NPK, wind etc. All of
        this data combined has provided Sostena with a proven track record of
        +90% harvest date accuracy within a given business week of up to 5 years
        in the future. Additionally, farmers have seen yield increases on
        different commodities of 12-30%.
      </p>
      <h4 className="text-h4 text-neutral-300 font-semibold mb-4">
        Performance issues
      </h4>
      <p className="text-p mb-4">
        With a growing number of users and data required to calculate precise
        planting schedules, the system's performance started to suffer.
        Especially for users with lots of plantings registered in the system.
      </p>
      <p className="text-p mb-4">
        For some users, the system pages were taking over 2 min to load. This
        was unacceptable. Sostena implemented a few in-house solutions, but none
        fixed the performance issue completely.
      </p>
      <p className="text-p mb-6">
        They started getting complaints from customers. A quick solution was
        urgently required. After searching a bit, they found Quave through
        Meteor's list of trusted partners.
      </p>
      <img
        className="mb-6"
        src="/images/case-study-sostena-2.jpg"
        alt="Produce Plan"
      />

      <div className="my-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-neutral-800 md:rounded-lg">
              <table className="min-w-full divide-y divide-neutral-800">
                <thead className="bg-neutral-900">
                  <tr>
                    <th
                      scope="col"
                      className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-neutral-300 sm:pl-6"
                    >
                      Test
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-neutral-300"
                    >
                      Page
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-neutral-300"
                    >
                      Load time before changes
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800 bg-white">
                  <tr>
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-neutral-500 sm:pl-6">
                      Test 1
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-neutral-500">
                      new_weeklyPlantingsTable
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-semibold text-neutral-300">
                      65036.931 ms
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-neutral-500 sm:pl-6">
                      Test 2
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-neutral-500">
                      new_weeklyPlantingsTable
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-semibold text-neutral-300">
                      33111.413 ms
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-neutral-500 sm:pl-6">
                      Test 3
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-neutral-500">
                      new_weeklyPlantingsTable
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-semibold text-neutral-300">
                      30173.884 ms
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-neutral-500 sm:pl-6">
                      Test 4
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-neutral-500">
                      new_weeklyPlantingsTable
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-semibold text-neutral-300">
                      46323.575 ms
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-semibold text-neutral-300 sm:pl-6 bg-neutral-900">
                      Average
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-semibold text-neutral-300 bg-neutral-900" />
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-semibold text-neutral-300 bg-neutral-900">
                      39717.494 ms
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <h4 className="text-h4 text-neutral-300 font-semibold mb-4">Solution</h4>
      <p className="text-p mb-4">
        After getting access to the code, Quave did a quick assessment. It
        quickly became clear which parts of the code could be optimized.
      </p>
      <p className="text-p mb-6">
        In less than 2 weeks, the performance of the primary section/page
        increased by more than 60%. After another week of work, we optimized the
        system even further. Some pages started loading 90% faster.
      </p>

      <div className="my-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-neutral-800 md:rounded-lg">
              <table className="min-w-full divide-y divide-neutral-800">
                <thead className="bg-neutral-900">
                  <tr>
                    <th
                      scope="col"
                      className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-neutral-300 sm:pl-6"
                    >
                      Test
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-neutral-300"
                    >
                      Page
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-neutral-300"
                    >
                      Load time before changes
                    </th>
                    <th
                      scope="col"
                      colSpan="2"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-neutral-300"
                    >
                      Load time after changes
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800 bg-white">
                  <tr>
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-neutral-500 sm:pl-6">
                      Test 1
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-neutral-500">
                      new_weeklyPlantingsTable
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-semibold text-neutral-300">
                      65036.931 ms
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-semibold text-neutral-300">
                      <span>15741.910 ms</span>
                    </td>
                    <td className="whitespace-nowrap px-2 py-2">
                      <span className="ml-2 text-small font-semibold text-success">
                        -75.8%
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-neutral-500 sm:pl-6">
                      Test 2
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-neutral-500">
                      new_weeklyPlantingsTable
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-semibold text-neutral-300">
                      33111.413 ms
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-semibold text-neutral-300">
                      <span>16181.973 ms</span>
                    </td>
                    <td className="whitespace-nowrap px-2 py-2">
                      <span className="ml-2 text-small font-semibold text-success">
                        -51.1%
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-neutral-500 sm:pl-6">
                      Test 3
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-neutral-500">
                      new_weeklyPlantingsTable
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-semibold text-neutral-300">
                      30173.884 ms
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-semibold text-neutral-300">
                      <span>15896.878 ms</span>
                    </td>
                    <td className="whitespace-nowrap px-2 py-2">
                      <span className="ml-2 text-small font-semibold text-success">
                        -47.4%
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-neutral-500 sm:pl-6">
                      Test 4
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-neutral-500">
                      new_weeklyPlantingsTable
                    </td>

                    <td className="whitespace-nowrap px-2 py-2 text-sm font-semibold text-neutral-300">
                      46323.575 ms
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-semibold text-neutral-300">
                      <span>15202.004 ms</span>
                    </td>
                    <td className="whitespace-nowrap px-2 py-2">
                      <span className="ml-2 text-small font-semibold text-success">
                        -67.2%
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-semibold text-neutral-300 sm:pl-6 bg-neutral-900">
                      Average
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-semibold text-neutral-300 bg-neutral-900" />
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-semibold text-neutral-300 bg-neutral-900">
                      39717.494 ms
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-semibold text-neutral-300 bg-neutral-900">
                      <span>15819.394 ms</span>
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-semibold bg-neutral-900">
                      <span className="ml-2 inline-flex items-baseline text-small font-semibold text-success">
                        -60.1%
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <p className="text-p mb-4">
        Here's a summary explaining the main thing we delivered:
      </p>
      <ul className="list-disc">
        <li className="ml-6 mb-2 text-p">
          The system was processing all data from the homepage in a single
          subscription. We changed that implementation to load paginated data
          step by step. Loading everything in a single subscription was taking
          too long. Splitting it into smaller pieces reduced the load time.
        </li>
        <li className="ml-6 mb-2 text-p">
          Pre-processed the data used for heavy calculations server-side (not
          the client side when the page is loading).
        </li>
        <li className="ml-6 mb-2 text-p">
          Removed all unnecessary data loaded in the subscription but not used
          or displayed on the homepage.
        </li>
        <li className="ml-6 mb-2 text-p">
          Changed components that were subscribing to the entire database, even
          when the user only needed one item from the database.
        </li>
        <li className="ml-6 mb-4 text-p">
          <p className="mb-2">
            Created a new structure that facilitates the publication of data as
            "view-only" on the client side (minimongo), including:
          </p>
          <ul className="list-decimal mb-6">
            <li className="ml-6 mb-2">
              Avoided duplicate subscriptions that slowed down the system.
            </li>
            <li className="ml-6 mb-2">
              Created a new way to publish data in a summarized format.
            </li>
            <li className="ml-6 mb-2">
              Created a new method that assists in subscribing to summarized
              data.
            </li>
          </ul>
        </li>
      </ul>

      <h4 className="text-h4 text-neutral-300 font-semibold mb-4">
        Product design
      </h4>
      <p className="text-p mb-4">
        Our collaboration with Sostena over the past year has led to numerous
        enhancements within their product, ProducePlan. In this section, we'll
        spotlight one of features we've developed to showcase our design
        expertise.
      </p>
      <p className="text-p mb-4">
        Sostena's primary objective was to create a seamless and efficient way
        to manage sales orders within ProducePlan. They initiated the research
        phase, engaging directly with their clients to gain insights into their
        specific needs. As their design partners, we were brought on board to
        help refine and shape this undertaking.
      </p>
      <p className="text-p mb-4">
        This task presented a unique challenge as Sostena had a clear vision,
        including specific fields they wanted to incorporate. We needed to
        harmonize these requirements with existing design patterns and
        accommodate all their needs, particularly within each inventory item of
        the sales order.
      </p>
      <p className="text-p mb-4">
        To kickstart the project, we embarked on comprehensive research,
        exploring various services that facilitate invoice and sales order
        creation. Drawing inspiration from the best practices of these services,
        we devised an initial prototype.
      </p>
      <p className="text-p mb-4">
        Our iterative design process involved early sharing of our work to
        collect feedback and iterate on our designs. This collaborative approach
        ensured the entire team was aligned with the design direction, leading
        to fewer surprises along the way.
      </p>
      <p className="text-p mb-8">
        In the end, we delivered a prototype that met the approval of the entire
        team and promptly shared it with Sostena's clients. Following one final
        round of refinements, we solidified the design, resulting in a
        well-optimized and user-friendly sales order management feature that
        aligned with Sostena's objectives.
      </p>

      <video
        className="bg-black mb-10"
        src="/images/case-study-sostena-3.mp4#t=0.001"
        controls
      ></video>
    </>
  ),
};
