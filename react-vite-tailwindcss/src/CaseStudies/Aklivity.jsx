import React from 'react';
import { RoutePaths } from '@/router/RoutePaths';

export const aklivityContent = {
  id: 'aklivity',
  title:
    'VSCode extension: how Quave delivered a time-sensitive project for Aklivity in just 45 days',
  featuredImageURL: '',
  featuredLogoURL: '/images/case-study-aklivity-logo.jpg',
  authorName: 'Leonid Lukyanov',
  authorPosition: 'CEO',
  authorPhotoURL: '/images/case-study-aklivity-client.png',
  company: {
    name: 'Aklivity',
    size: '2-10 employees',
    industry: 'Tech & Innovation',
    location: 'USA',
    description: 'API Gateway for event-driven architectures.',
  },
  productName: 'Zilla',
  productURL: 'https://docs.aklivity.io/zilla/latest/ ',
  services: 'Product Design, Web Development',
  techStack: [],
  testimonial:
    "Quave's results-driven approach is excellent. I have full confidence in delegating challenging tasks to their team, knowing that they consistently deliver the desired outcomes and always go the extra mile.",
  URL: RoutePaths.CASE_STUDY_AKLIVITY,
  tags: ['tech', 'design', 'web-dev'],
  text: (
    <>
      <p className="text-p mb-4">
        Aklivity is working on an open-source project called Zilla and needed a
        VSCode extension that would allow developers to visually edit Zilla’s
        YAML config files based on JSON schema but with Zilla-specific UX.
      </p>
      <p className="text-p mb-4">
        The project faced time constraints due to an upcoming event where the
        extension would take center stage. The challenge of transforming their
        work-in-progress into a visually appealing extension with an intuitive
        UI loomed large.
      </p>
      <p className="text-p mb-4">
        Recognizing the urgency and complexity, Aklivity chose Quave as their
        partner. Our team, featuring an experienced extension developer, a UI/UX
        designer, a Product Manager, and a seasoned Tech Lead, adopted an
        iterative approach. Weekly check-ins with the customer facilitated
        progress sharing, result showcasing, and adaptability based on their
        feedback.
      </p>
      <p className="text-p mb-4">
        In just 45 days, Quave delivered an outstanding outcome. Akvlitiy
        showcased the final VSCode extension at their event and received
        enthusiastic feedback from their audience.
      </p>
    </>
  ),
};
