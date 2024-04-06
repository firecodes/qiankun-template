import React from 'react';
import { RoutePaths } from '@/router/RoutePaths';

export const bemarkeContent = {
  id: 'bemarke',
  title:
    'Strategic IT partnership with Bemarke for software and DevOps excellence',
  featuredImageURL: '',
  featuredLogoURL: '/images/case-study-bemarke-logo.jpg',
  authorName: 'Reynardt Peralta',
  authorPosition: 'CEO',
  authorPhotoURL: '/images/case-study-bemarke-client.png',
  company: {
    name: 'Bemarke',
    size: '2-10 employees',
    industry: 'E-commerce',
    location: 'Brazil',
    description: 'Web app solution for restaurants + CRM.',
  },
  productName: 'Bemarke',
  productURL: 'https://www.bemarke.com/',
  services: 'Mobile Development, Web development, DevOps',
  techStack: ['nodejs', 'meteor', 'react', 'mongo', 'zcloud'],
  testimonial:
    "Quave has become our IT partner. Their support in adapting the system to our growing customer base, optimizing system integrations, and handling our project's infrastructure with DevOps expertise has been a key to our success.",
  URL: RoutePaths.CASE_STUDY_BEMARKE,
  tags: ['e-commerce', 'mobile-dev', 'web-dev', 'devops', 'performance-analysis', 'meteor'],
  text: (
    <>
      <p className="text-p mb-4">
        Bemarke is a budget-friendly solution for restaurants seeking to
        establish an online presence and strengthen customer relationships
        through their CRM tool. After experiencing significant growth in the
        last 6 months, by tripling its size and customer base, Bemarke was
        looking for a reliable partner to take the lead on its software and
        DevOps initiatives.
      </p>
      <p className="text-p mb-4">
        Quave became the right choice. Serving as their IT partner, Quave
        quickly made the necessary adjustments to accommodate their increasing
        demand, and provided DevOps support to manage project infrastructure and
        server operations.
      </p>
      <p className="text-p mb-4">
        Firstly, we've improved the login process to enhance user satisfaction.
        Next, we streamlined system integrations, including our recent
        collaboration with TOTVs and the optimizations for their payment
        gateway, Pagar.me.
      </p>
      <p className="text-p mb-4">
        In terms of cloud, we've migrated Bemarke to{' '}
        <a
          href="https://zcloud.ws"
          target="_blank"
          rel="noreferrer"
          className="text-p mb-6 text-primary-300 hover:text-primary-400"
        >
          zCloud
        </a>
        . We've reorganized their project and environments to handle higher
        workloads while keeping costs under control.
      </p>
      <p className="text-p mb-4">
        In essence, Quave's collaboration with Bemarke involves adapting to
        growth, ensuring smooth system integrations, and enhancing user
        interactions for an improved digital experience.
      </p>
    </>
  ),
};
