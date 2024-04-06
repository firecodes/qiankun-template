import React from 'react';
import { RoutePaths } from '@/router/RoutePaths';

export const pathableContent = {
  id: 'pathable',
  title:
    "Sustaining Pathable's exponential growth with developers, designers, and tech leads",
  featuredImageURL: '/images/case-study-pathable-1.jpg',
  featuredImageSet:
    '/images/case-study-pathable-1.jpg 1x, /images/case-study-pathable-1@2x.jpg 2x',
  featuredLogoURL: '/images/case-study-pathable-logo.png',
  authorName: 'Peter Brown',
  authorPosition: 'Pathable CTO',
  authorPhotoURL: '/images/case-study-pathable-client.jpg',
  company: {
    name: 'Pathable',
    size: '50-150',
    industry: 'Events',
    location: 'USA',
    description:
      'Pathable makes software that helps people organize and run successful virtual, hybrid, and in-person conferences and events. The complete       event experience suite includes an online agenda, private meeting scheduling, gamification, exhibitor listings, tradeshow floor maps, social networking, lead retrieval, social networking, and more.',
  },
  productName: 'Pathable',
  productURL: 'https://pathable.com/',
  services:
    'Web Development, Mobile Development, UI/UX Design, Performance Analysis',
  techStack: ['meteor', 'react', 'mongo', 'nodejs'],
  testimonial:
    "Any development needs my team has whether design, product management, or software engineering Quave has us covered. Instead of spending twice the money and three times the time sourcing domestic talent myself, I briefly describe what I'm looking for and within a few days, I'm working with qualified professionals. So far, we've had 100% success rate with Quave. Magic!",
  URL: RoutePaths.CASE_STUDY_PATHABLE,
  tags: ['events', 'web-dev', 'mobile-dev', 'design', 'dev-ops', 'meteor'],
  text: (
    <>
      <h4 className="text-h4 text-neutral-300 font-semibold mb-4">Overview</h4>
      <p className="text-p mb-4">
        Millions of people have been using Pathable's platform to engage
        attendees at physical and on-line events. It combined live streaming,
        on-demand content access, and shared engagement experiences to allow
        users to bring content to life and promote excitement, no matter where
        attendees are.
      </p>
      <h4 className="text-h4 text-neutral-300 font-semibold mb-4">
        Challenges
      </h4>
      <p className="text-p mb-4">
        Three years ago, Pathable’s number of virtual events boomed. They soon
        realized they had to augment their team capacity to keep up with:
      </p>
      <ul className="list-disc mb-4">
        <li className="ml-6 mb-2 text-p">A growing number of events</li>
        <li className="ml-6 mb-2 text-p">
          A large number of users accessing the app at the same time{' '}
        </li>
        <li className="ml-6 mb-2 text-p">
          Requests from customers for new features
        </li>
        <li className="ml-6 mb-2 text-p">Requests for new integrations</li>
      </ul>
      <p className="text-p mb-4">
        They realized they needed to find a reliable partner quickly. Someone
        that could bring the right mix of experiences to the table and help
        scale and further develop their application.
      </p>
      <p className="text-p mb-4">
        Pathable found Quave to be the right partner.
      </p>
      <p className="text-p mb-6 font-semibold">
        Since we started our partnership with Pathable, more than 15 of our
        people worked alongside their team. We allocated several profiles,
        including Developers, DevOps, Designers, Product Owners, and Tech Leads.
      </p>
      <h4 className="text-h4 text-neutral-300 font-semibold mb-4">
        Development
      </h4>
      <p className="text-p mb-4">
        Our team was responsible for several areas, including:
      </p>
      <ul className="list-disc">
        <li className="ml-6 mb-2 text-p">
          <b>Architecture:</b> our team helped define how the system could deal
          with the increasing load. After some investigation, we came up with a
          plan and set of implementations to scale the application.
        </li>
        <li className="ml-6 mb-2 text-p">
          <b>Integration:</b> most of Pathable's customers ask for integrations
          with their proprietary or third-party systems, such as AMS or CRM
          platforms. We had a dedicated team to support the development of these
          new integrations or maintain the existing ones.{' '}
        </li>
        <li className="ml-6 mb-6 text-p">
          <b>New features & Foundation:</b> our team implemented several of
          their existing features, including Lead scanning (QR Code). We ealso
          worked directly in the core system: Offline support, Cordova
          integration (Native app), Native app build and delivery in stores,
          White-label setup, Zoom integration, and Render time optimization.
        </li>
      </ul>
      <h4 className="text-h4 text-neutral-300 font-semibold mb-4">DevOps</h4>
      <p className="text-p mb-6">
        We completely switched their DevOps & Infrastructure to a
        state-of-the-art level. Here are some of the most important things we
        did: AWS cost optimization, setting up the Continuous Integration (CI)
        and Continuous Delivery (CD), switching from infrastructure to
        infrastructure-as-code, environment monitoring, end-to-end tests setup
        with full environment restore.
      </p>
      <h4 className="text-h4 text-neutral-300 font-semibold mb-4">
        Product definition
      </h4>
      <p className="text-p mb-6">
        With several customer requests coming at the same time, most of them
        related to new features, it was our product owner's role to prioritize
        the work, define the requirements and validate the final delivery with
        the customers.
      </p>
      <h4 className="text-h4 text-neutral-300 font-semibold mb-4">
        Product design
      </h4>
      <p className="text-p mb-4">
        One of the outstanding areas of Pathable's product was their in-app user
        experience. Our designers were the ones that shaped that experience.
      </p>
      <p className="text-p mb-4">
        Over the years, we've had the opportunity to work on numerous features.
        In this section, we'll highlight one of them to provide insight into our
        design process. Since you might not be familiar with the product, please
        keep in mind that not all the decisions we made may be immediately
        evident to you.
      </p>
      <p className="text-p mb-4">
        The feature we'd like to showcase is called "Call Now." It was designed
        to facilitate communication between virtual trade show attendees and
        booth staff members.
      </p>
      <p className="text-p mb-4">
        The user story driving this feature was: "As a virtual trade-show
        attendee, we want to easily contact booth staff representatives so we
        can make purchases, sell our products, or establish connections to
        benefit our business."
      </p>
      <p className="text-p mb-4">
        Our initial step was research. While we understood the attendee's needs,
        we needed a deeper understanding of the organizations participating in
        the trade shows. We sought answers to questions like: How many
        representatives would typically handle calls during the "Live" hours?
        How long would they be available to manage virtual booths? How should
        calls be distributed among representatives? Given that calls often led
        to sales, it was crucial to ensure fair treatment of all staff members.
      </p>
      <p className="text-p mb-4">
        To gather insights, we collaborated with our sales team, and our product
        owner engaged with them to gather feedback. Concurrently, we conducted
        one-on-one interviews with our partners and resellers. We consolidated
        this information to form a comprehensive overview. Once our questions
        were answered, we validated our ideas with all stakeholders.
      </p>
      <p className="text-p mb-4">
        We proceeded to work on the prototype, engaging in quick iterations. We
        believe in sharing our work early to gather as much feedback as
        possible. This iterative process involved incorporating feedback into
        our designs and repeating the cycle. With the entire team aware of the
        design direction, we encountered fewer surprises along the way.
      </p>
      <p className="text-p mb-4">
        Ultimately, we arrived at a prototype that satisfied everyone on the
        team. We shared it with stakeholders, the partners who helped shape the
        requirements, and our sales team. After one final round of refinements,
        we arrived at the following design:
      </p>

      <p className="text-p mb-4">
        This is the prototype from the perspective of an attendee visiting a
        booth:
      </p>
      <video
        className="bg-black mb-10"
        src="/images/case-study-pathable-2.mp4#t=0.001"
        controls
      ></video>

      <p className="text-p mb-4">
        This is what would happen if all the booth staff representatives were
        busy and the attendee couldn't get a hold of anyone:
      </p>
      <video
        className="bg-black mb-4"
        src="/images/case-study-pathable-3.mp4#t=0.001"
        controls
      ></video>
      <h4 className="text-h4 text-neutral-300 font-semibold mb-4 mt-8">
        Marketing website
      </h4>
      <p className="text-p mb-4">
        We also designed and built Pathable's marketing website on WordPress.
      </p>
      <img
        className="mb-8"
        src="/images/case-study-pathable-4.jpg"
        alt="Pathable marketing website"
      />
    </>
  ),
};
