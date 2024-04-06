import React from 'react';
import { RoutePaths } from '@/router/RoutePaths';

export const zcloudContent = {
  id: 'zcloud',
  title:
    "Creating zCloud: a product designer's perspective on creating a Cloud hosting platform",
  featuredImageURL: '/images/case-study-zcloud-1.jpg',
  featuredLogoURL: '/images/case-study-zcloud-logo.png',
  authorName: 'Adrian Pako',
  authorPosition: 'Product Designer',
  authorPhotoURL: '/images/case-study-zcloud-client.jpg',
  company: {
    name: 'zCloud',
    size: '2-10 employees',
    industry: 'Tech & Innovation',
    location: 'Brazil',
    description: 'zCloud, a flexible and user-friendly Cloud hosting service.',
  },
  productName: 'zCloud',
  productURL: 'https://zcloud.ws/',
  services: 'Web Development, Product Design, DevOps, Marketing Website',
  techStack: ['nodejs', 'meteor', 'mongo'],
  testimonial: '',
  URL: RoutePaths.CASE_STUDY_ZCLOUD,
  tags: ['tech', 'web-dev', 'design', 'devops', 'website', 'meteor'],
  text: (
    <>
      <h4 className="text-h4 text-neutral_300 font-semibold mb-4">Overview</h4>
      <p className="text-p mb-4">
        zCloud, a flexible and user-friendly Cloud hosting service, found its
        beginnings in the autumn of 2022 when we embarked on the ambitious
        journey to build it from scratch. Our vision was clear: create a service
        that would allow people to easily deploy and manage apps & databases in
        the Cloud. At the core of our mission was our commitment to
        transparency. We wanted our clients to know precisely what they were
        getting into, without any hidden costs.
      </p>
      <p className="text-p mb-4">
        Our commitment to flexibility led us to ensure compatibility with a wide
        array of technologies that seamlessly integrate with Docker. Whether
        it's apps that run on JavaScript, Java, PHP, Ruby, Python or databases
        like PostgreSQL, MongoDB, Redis, zCloud was designed to support them
        all. Moreover, we aimed to provide our clients with the ultimate control
        over their configurations through Docker, giving them the power to
        fine-tune their settings to perfection.
      </p>
      <p className="text-p mb-4">
        One of the hallmarks of zCloud's exceptional service is our dedication
        to our clients. When they need help, we're there for them. Our
        commitment to customer support is unparalleled, promising responses
        within an hour during our working hours, ensuring that our clients are
        never left in the dark.
      </p>
      <h4 className="text-h4 text-neutral-300 font-semibold mb-4">
        Design Challenges
      </h4>
      <p className="text-p mb-4">
        Starting a design project from scratch is never easy. Our journey with
        zCloud presented unique challenges that demanded creative solutions.
      </p>
      <p className="text-p mb-4">
        One of the first hurdles we encountered was the need to create a
        comprehensive color scheme and ensuring it would be visually appealing
        and consistent across the platform.
      </p>
      <p className="text-p mb-4">
        Building a component library was the next big task on our list. With no
        existing product or clients to provide feedback, we had to lay the
        foundation for the library ourselves. We aimed to make it optimized for
        swift development, easy maintenance, and accessibility. Finding the
        right solution was critical as it would heavily influence the design of
        our components.
      </p>
      <p className="text-p mb-4">
        Designing the MVP (Minimum Viable Product) proved to be a unique
        challenge. Without direct client feedback, we had to rely on competitor
        analysis and social media discussions to understand user expectations.
        This allowed us to identify the features that would be most valuable to
        our clients. Fortunately, zCloud's CEO extensive industry experience and
        expertise provided a valuable resource to validate our design decisions.
      </p>
      <p className="text-p mb-4">
        Our iterative design process revolved around early sharing of our work,
        collecting feedback, and making necessary iterations. This collaborative
        approach ensured that the entire team was aligned with the design
        direction, leading to fewer surprises along the way.
      </p>
      <h4 className="text-h4 text-neutral-300 font-semibold mb-4">
        Product Design
      </h4>
      <p className="text-p mb-4">
        Let's explore the creative process behind zCloud's design. We'll delve
        into each challenge we mentioned in the previous section.
      </p>
      <h6 className="text-h6 text-neutral_300 font-semibold mb-4">
        Color scheme
      </h6>
      <p className="text-p mb-4">
        Our first hurdle, the color scheme. The process started with our two
        primary brand colors: lime and teal. We knew we would use a dark theme,
        as requested by the CEO, and we used this as a starting point. From
        there, we expanded the palette by creating four shades and four tints
        from each color. The result was not only a visually appealing scheme but
        also a versatile one that could be applied to different elements within
        the app. Lime became the primary color for buttons and links, while teal
        was used as an accent color. We also addressed neutral, light, and
        supporting colors. The process of creating the color scheme involved
        laying down 9 empty blocks (named 100-900), choosing a color to go in
        the middle block (500) and then creating 4 shades and 4 tints from that
        color. Once we had all the variations for all the colors we harmonized
        and balanced them out.
      </p>
      <img
        className="mb-8"
        src="/images/case-study-zcloud-2.jpg"
        alt="zCloud color scheme"
      />
      <h6 className="text-h6 text-neutral_300 font-semibold mb-4">
        Component library
      </h6>
      <p className="text-p mb-4">
        When it came to building the component library, we carefully considered
        our options. We aimed for a solution that would allow for quick
        development and easy maintenance. After evaluating several options, we
        settled on Radix, an open-source component library. One of the
        advantages of Radix was that it provided components without any
        predefined styles, allowing us to customize them according to our design
        preferences using Tailwind. This flexibility was a significant asset as
        it allowed us to create basic components in Figma and expand the library
        as we progressed, aligning with our evolving needs.
      </p>
      <img
        className="mb-8"
        src="/images/case-study-zcloud-3.jpg"
        alt="zCloud component library"
      />
      <h6 className="text-h6 text-neutral_300 font-semibold mb-4">
        Designing the MVP
      </h6>
      <p className="text-p mb-4">
        Given the absence of an existing product and clients in the early stages
        of our work, designing the MVP posed a unique challenge. To bridge this
        gap, we embarked on extensive competitor analysis to gain insights into
        what users were expecting in the market. By monitoring social media
        discussions, particularly on platforms like Reddit and Twitter, we
        tapped into the problems and frustrations users were experiencing with
        our competitors. This valuable information guided us in shaping the
        features we would incorporate into our MVP. With our CEO's wealth of
        industry experience, we could trust his judgment in validating various
        flows and design decisions.
      </p>
      <h6 className="text-h6 text-neutral_300 font-semibold mb-4">
        Simple solutions to complex problems
      </h6>
      <p className="text-p mb-4">
        One of the most significant challenges we tackled was making the complex
        process of deploying and managing apps as straightforward as possible.
        We had to come up with some pretty interesting solutions to keep things
        simple for our users. One of our solution addressed a common issue faced
        by users—knowing when to redeploy or build a new image after making
        changes to environment host, vars or settings. We designed a feature
        that enabled users to review all changes before applying them with a
        single, easily visible button. This not only eliminated confusion but
        also improved the review process and prevented misconfigurations that
        could result in downtime. Furthermore, this feature allowed users to
        track changes made by other team members, enhancing collaboration and
        transparency.
      </p>
      <p className="text-p mb-4">
        This prototype shows the basic flow of making a change and applying it:
      </p>
      <video
        className="bg-black mb-10"
        src="/images/case-study-zcloud-4.mp4#t=0.001"
        controls
      ></video>
      <p className="text-p mb-4">
        A sticky bar appears when you scroll the 'Apply Changes' button out of
        view but that’s not visible in the prototype. Here's how several changes
        would appear in the “See changes” section:
      </p>
      <img
        className="mb-10"
        src="/images/case-study-zcloud-4.jpg"
        alt="zCloud Apply changes modal"
      />
      <h6 className="text-h6 text-neutral_300 font-semibold mb-4">
        Other features from this project
      </h6>
      <p className="text-p mb-8">
        This is just one of the many features we worked on. We’ve added a a few
        more prototypes below that you can browse to get a feel of the product
        or if you want to check zCloud for yourself go to{' '}
        <a
          href="https://zcloud.ws"
          className="text-primary-300"
          target="_blank"
          rel="noreferrer"
        >
          zCloud.ws
        </a>
        .
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div>
          <video
            className="bg-black"
            src="/images/case-study-zcloud-5.mp4#t=0.001"
            controls
          ></video>
          <small className="text-small block text-center pt-2">
            Registration and first deploy
          </small>
        </div>
        <div>
          <video
            className="bg-black"
            src="/images/case-study-zcloud-6.mp4#t=0.001"
            controls
          ></video>
          <small className="text-small block text-center pt-2">
            Edit a long environment variable
          </small>
        </div>
        <div>
          <video
            className="bg-black"
            src="/images/case-study-zcloud-7.mp4#t=0.001"
            controls
          ></video>
          <small className="text-small block text-center pt-2">
            Environment history
          </small>
        </div>
        <div>
          <video
            className="bg-black"
            src="/images/case-study-zcloud-8.mp4#t=0.001"
            controls
          ></video>
          <small className="text-small block text-center pt-2">
            Updated logs UI
          </small>
        </div>
      </div>
      <h4 className="text-h4 text-neutral-300 font-semibold mb-4 mt-8">
        Marketing website
      </h4>
      <p className="text-p mb-4">
        We also designed and built zCloud's marketing website.
      </p>
      <img
        className="mb-8"
        src="/images/case-study-zcloud-9.jpg"
        alt="zCloud marketing website"
      />
    </>
  ),
};
