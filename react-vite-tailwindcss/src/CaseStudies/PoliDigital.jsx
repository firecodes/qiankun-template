import React from 'react';
import { RoutePaths } from '@/router/RoutePaths';

export const poliDigitalContent = {
  id: 'polidigital',
  title:
    "Boosting Poli's performance for robust service delivery and message consumption",
  featuredImageURL: '/images/case-study-polidigital-1.jpg',
  featuredImageSet:
    '/images/case-study-polidigital-1.jpg 1x, /images/case-study-polidigital-1@2x.jpg 2x',
  featuredLogoURL: '/images/case-study-polidigital-logo.png',
  authorName: 'Gabriel Henrique',
  authorPosition: 'CTO',
  authorPhotoURL: '/images/case-study-polidigital-client.jpeg',
  company: {
    name: 'Poli',
    size: '51-200',
    industry: 'CRM',
    location: 'Brazil',
    description: 'Integration platform for different communication channels.',
  },
  productName: 'Polichat',
  productURL: 'https://polichat.com.br/ ',
  services: 'Consulting, DevOps',
  techStack: ['laravel', 'php', 'nodejs', 'golang', 'rabbitmq'],
  testimonial:
    'Quave came through when we needed them the most. Their proactive support and expertise helped us overcome performance challenges in critical moments.',
  URL: RoutePaths.CASE_STUDY_POLIDIGITAL,
  tags: ['crm', 'consulting', 'devops', 'web-dev', 'performance-analysis'],
  text: (
    <>
      <p className="text-p mb-4">
        In 2021, Polichat, a messaging solution developed by Poli, experienced a
        big growth, tripling its size. To further enhance its capabilities, Poli
        has recently forged a strategic partnership with Meta to facilitate
        business sales through WhatsApp. This expansion, however, brought
        performance challenges within the platform, requiring assistance from a
        reliable partner.
      </p>
      <p className="text-p mb-4">
        In response to their urgent needs, Poli turned to Quave for support.
        Since our collaboration began, we have been actively involved in their
        War Room, addressing critical issues that have been affecting their
        customer satisfaction. Additionally, we have enlisted the expertise of a
        DevOps specialist on an as-needed basis to assist Poli in optimizing
        their infrastructure.
      </p>
      <p className="text-p mb-4">
        Working in close collaboration, we ensure seamless and improved service
        delivery for Poli and its clients, while also working together to
        optimize message consumption through RabbitMQ, guaranteeing robust
        throughput and no message loss, even when some services are unavailable.
      </p>
    </>
  ),
};
