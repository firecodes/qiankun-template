import React from 'react';

const experts = [
  {
    photo: '/images/expert-matheus-large.jpg',
    photoSet:
      '/images/expert-matheus-large.jpg 1x, /images/expert-matheus-large@2x.jpg 2x',
    name: 'Matheus Camargo de Castro',
    position: 'Lead Developer',
    contribution: ['quave', 'meteor'],
    description: (
      <>
        Core contributor & creator of the{' '}
        <a
          href="https://marketplace.visualstudio.com/items?itemName=meteor-toolbox.meteor-toolbox"
          target="_blank"
          rel="noreferrer"
          className="text-primary-300 hover:text-primary-400"
        >
          Meteor Toolbox
        </a>
      </>
    ),
  },
  {
    photo: '/images/expert-adrian-large.jpg',
    photoSet:
      '/images/expert-adrian-large.jpg 1x, /images/expert-adrian-large@2x.jpg 2x',
    name: 'Adrian Pako',
    position: 'Senior Product Designer',
    contribution: ['quave'],
  },
  {
    photo: '/images/expert-filipe-large.jpg',
    photoSet:
      '/images/expert-filipe-large.jpg 1x, /images/expert-filipe-large@2x.jpg 2x',
    name: 'Filipe Névola',
    position: 'CEO',
    contribution: ['quave', 'ceo'],
  },
  {
    photo: '/images/expert-rafa-large.jpg',
    photoSet:
      '/images/expert-rafa-large.jpg 1x, /images/expert-rafa-large@2x.jpg 2x',
    name: 'Rafael Braga',
    position: 'Development Director',
    contribution: ['quave'],
  },
  {
    photo: '/images/expert-edimar-large.jpg',
    photoSet:
      '/images/expert-edimar-large.jpg 1x, /images/expert-edimar-large@2x.jpg 2x',
    name: 'Edimar Cardoso',
    position: 'Principal DevOps',
    contribution: ['quave', 'meteor'],
    description: <>Core contributor</>,
  },
  {
    photo: '/images/expert-filipe-large.jpg',
    photoSet:
        '/images/expert-filipe-large.jpg 1x, /images/expert-filipe-large@2x.jpg 2x',
    name: 'Filipe Névola',
    position: 'CEO',
    contribution: ['meteor'],
    description: (
        <>
          Core contributor & creator of many packages
        </>
    ),
  },
];

export const ExpertList = ({ showOnly = 'quave', showDescription = false }) => {
  return (
    <>
      {experts.map(
        (
          { photo, photoSet, name, position, contribution, description },
          index
        ) => {
          return (
            contribution.includes(showOnly) && (
              <li
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img
                  className="rounded-4"
                  src={photo}
                  srcSet={photoSet}
                  alt={`${name} - ${position}`}
                />
                <p className="text-p text-neutral-300 font-semibold mt-4">
                  {name}
                </p>
                <p className="text-p">{position}</p>
                {showDescription && (
                  <small className="text-small border border-neutral-800 rounded p-1 mt-2 max-w-[240px]">
                    {description}
                  </small>
                )}
              </li>
            )
          );
        }
      )}
    </>
  );
};

const OurExperts = () => {
  return (
    <>
      <div className="container mx-auto 2xl:max-w-default flex flex-col items-center text-center px-4 lg:px-8">
        <h2 className="text-h3 md:text-h2 mb-2 font-semibold text-neutral-300">
          Our Top Experts
        </h2>
        <h6 className="text-p md:text-h6 mb-14 max-w-small">
          Meet some of the people working at Quave.
        </h6>
      </div>
      <div className="container mx-auto">
        <ul
          id="our-experts"
          className="mx-auto max-w-[900px] xl:max-w-full flex flex-wrap gap-12 items-center justify-center xl:justify-evenly mb-24 px-4 lg:px-8"
        >
          <ExpertList />
        </ul>
      </div>
    </>
  );
};

export default OurExperts;
