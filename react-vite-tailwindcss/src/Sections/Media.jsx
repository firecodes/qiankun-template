import React from 'react';

const mediaList = [
  {
    photo: '/images/logo-ai-proof-dev.png',
    name: 'AI Proof Dev',
    headline:
      "Don't be afraid of AI. The best Developers (aka 1% Devs) will not be replaced by AI.",
    description: (
      <>
        What you should do instead? Become the 1%.{' '}
        <a
          href="https://aiproofdev.com"
          target="_blank"
          rel="noreferrer"
          className="text-primary-300 hover:text-primary-400"
        >
          Learn how
        </a>
      </>
    ),
  },
  {
    photo: '/images/logo-codeftw.png',
    name: 'CodeFTW',
    headline: 'Free content in Portuguese to help you to become a developer',
    description: (
      <>
        The basics to help newcomers in the dev world.{' '}
        <a
          href="https://codeftw.dev"
          target="_blank"
          rel="noreferrer"
          className="text-primary-300 hover:text-primary-400"
        >
          Website
        </a>
      </>
    ),
  },
  {
    photo: '/images/logo-quave.png',
    name: 'Quaverse Podcast',
    headline: 'Discussions around latest technologies and trends',
    description: (
      <>
        Do you want to learn and have fun at the same time?{' '}
        <a
          href="https://www.youtube.com/playlist?list=PLX9rGwtbT4CEEoe0rtuzYg1d3RDWF-o_5"
          target="_blank"
          rel="noreferrer"
          className="text-primary-300 hover:text-primary-400"
        >
          Watch
        </a>
      </>
    ),
  },
  {
    photo: '/images/logo-quave.png',
    name: 'YouTube Channel',
    headline: 'Videos about programming, technology and more. Check our reaction about Devin.',
    description: (
      <>
        Find useful and fresh content for tech people.{' '}
        <a
          href="https://www.youtube.com/@QuaveDev"
          target="_blank"
          rel="noreferrer"
          className="text-primary-300 hover:text-primary-400"
        >
          Subscribe
        </a>
      </>
    ),
  },
];

const MediaList = () => {
  return (
    <>
      {mediaList.map(
        (
          { photo, photoSet, name, headline, description },
          index
        ) => {
          return (
            <li
              key={index}
              className="flex flex-col items-center text-center max-w-[360px]"
            >
              <div className="max-w-[50px]">
                <img
                  className="rounded-4"
                  src={photo}
                  alt={`${name} - ${headline}`}
                />
              </div>
              <p className="text-p text-neutral-300 font-semibold mt-4">
                {name}
              </p>
              <p className="text-p">{headline}</p>
              {description && (
                <small className="text-small border border-neutral-800 rounded p-1 mt-2 max-w-[240px]">
                  {description}
                </small>
              )}
            </li>
          );
        }
      )}
    </>
  );
};
export const Media = () => {
  return (
    <>
      <div id="education" className="container mx-auto 2xl:max-w-default flex flex-col items-center text-center px-4 lg:px-8">
        <h2 className="text-h3 md:text-h2 mb-2 font-semibold text-neutral-300">
          Education
        </h2>
        <h6 className="text-p md:text-h6 mb-14 max-w-small">
          How Quave can help you learn and grow.
        </h6>
      </div>
      <div className="container mx-auto">
        <ul
          id="our-experts"
          className="mx-auto max-w-[900px] xl:max-w-full flex flex-wrap gap-12 items-center justify-center xl:justify-evenly mb-24 px-4 lg:px-8"
        >
          <MediaList />
        </ul>
      </div>
    </>
  );
};
