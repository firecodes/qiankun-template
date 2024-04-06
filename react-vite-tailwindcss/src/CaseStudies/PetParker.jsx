import React from 'react';
import { RoutePaths } from '@/router/RoutePaths';

export const petParkerContent = {
  id: 'petparker',
  title:
    "PetParker's global expansion: customizing backend, mobile app, and DevOps",
  featuredImageURL: '/images/case-study-petparker-1.jpg',
  featuredImageSet:
    '/images/case-study-petparker-1.jpg 1x, /images/case-study-petparker-1@2x.jpg 2x,',
  featuredLogoURL: '/images/case-study-petparker-logo.jpg',
  authorName: 'Georges Ebel',
  authorPosition: 'CEO',
  authorPhotoURL: '/images/case-study-pet-parker-client.jpeg',
  company: {
    name: 'PetParker',
    size: '11-50',
    industry: 'Pet',
    location: 'Brazil and Canada',
    description: 'Connected pet safety stations booked via mobile app.',
  },
  productName: 'PetParker',
  productURL: 'https://petparker.com.br/',
  services: 'Mobile Development, Web Development, DevOps',
  techStack: ['python', 'swift', 'java', 'kotlin', 'zcloud'],
  testimonial:
    'After deciding to expand my business to other countries, I had to find a reliable partner with international experience and solid delivery, and Quave gave me that trust from day one.',
  URL: RoutePaths.CASE_STUDY_PETPARKER,
  tags: ['pet', 'web-dev', 'mobile-dev', 'devops', 'design'],
  text: (
    <>
      <p className="text-p mb-4">
        Having established a successful business in Brazil with over 200 pet
        stations, PetParker decided to expand internationally, starting in
        Canada. They needed a reliable partner to help customize their backend
        and mobile apps (Android and iOS) for international markets, along with
        developing new features for the expansion.
      </p>
      <p className="text-p mb-4">
        With tight timelines and a need for expertise in Python (backend),
        Kotlin (Android), and Swift (iOS), PetParker turned to Quave. Quave took
        charge of the entire project, assembling a dedicated team, including a
        product owner, tech lead, and developers for the required stack.
      </p>
      <p className="text-p mb-4">
        During the project, Quave identified that PetParker's CI/CD setup needed
        improvement. Without adding time or costs to the project, we reorganized
        their code repositories and smoothly migrated their project to zCloud,
        reducing server and hosting costs by over 30%.
      </p>
      <p className="text-p mb-4">
        The project's success solidified our partnership, leading to a new
        collaboration with PetParker on feature development and code
        maintenance.
      </p>
    </>
  ),
};
