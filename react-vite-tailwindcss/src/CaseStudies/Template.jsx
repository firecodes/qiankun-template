import React from 'react';
import { Link } from 'react-router-dom';
import { nextCsList } from './Next';

const TemplateCS = ({ content }) => {
  // Random from min 0 to max 13
  let randomNextCs = Math.floor(Math.random() * (nextCsList.length + 1));
  randomNextCs =
    randomNextCs + (content.title === nextCsList[randomNextCs].title ? 1 : 0);
  randomNextCs = randomNextCs > nextCsList.length ? 0 : randomNextCs;
  const NextCS = () => (
    <>
      <p className="text-p mb-4">Read another case study:</p>
      <div
        data-id="cs-next-study"
        className="bg-neutral-900 rounded-8 p-8 md:p-2 flex flex-col sm:flex-row items-start sm:items-center gap-8"
      >
        <Link
          to={nextCsList[randomNextCs].URL}
          className="bg-white flex flex-center border-2 border-neutral-900 transition-transform hover:scale-110 shrink-0 grow-0 w-full sm:w-[157px] h-[135px] md:w-[210px] md:h-[180px] rounded-6 p-2"
        >
          <img
            className="max-w-[135px]"
            src={nextCsList[randomNextCs].featuredLogoURL}
            alt={nextCsList[randomNextCs].company}
          />
        </Link>
        <div className="flex flex-col gap-6 grow md:pr-8">
          <p className="text-p">{nextCsList[randomNextCs].title}.</p>
          <Link
            to={nextCsList[randomNextCs].URL}
            className="text-primary-300 hover:text-primary-400"
          >
            Read Case Study →
          </Link>
        </div>
      </div>
    </>
  );

  return (
    <>
      {(content.featuredImageURL && (
        <header data-id="cs-header" className="lg:px-4 lg:mb-24 pt-8">
          <div className="mx-auto max-w-uwide flex flex-center flex-col bg-neutral-900 lg:h-[420px] xl:h-[470px] 2xl:h-[538px] px-4 lg:px-12 py-12 lg:py-0 lg:rounded-8 relative overflow-hidden">
            <div className="container 2xl:max-w-default mx-auto flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
              <div className="flex flex-col gap-6 text-left lg:pr-[590px] xl:pr-[680px] 2xl:pr-[780px]">
                <h2 className="text-h3 xl:text-h2 text-neutral-300 font-semibold">
                  {content.title}
                </h2>
                <div className="flex flex-col gap-2">
                  <p className="text-p">A conversation with:</p>
                  <div className="flex gap-2">
                    <img
                      className="h-[40px] w-[40px] rounded-full"
                      src={content.authorPhotoURL}
                      alt={content.authorName}
                    />
                    <div className="flex flex-col">
                      <h5 className="text-h6 text-neutral-300 font-semibold">
                        {content.authorName}
                      </h5>
                      <p className="text-small">{content.authorPosition}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block absolute right-2 bottom-0 h-full">
                <img
                  className="w-auto lg:h-full"
                  src={content.featuredImageURL}
                  srcSet={content.featuredImageSet}
                  alt={content.title}
                />
              </div>
            </div>
          </div>
        </header>
      )) || (
        <header data-id="cs-header" className="lg:px-4 lg:mb-24 pt-8">
          <div className="mx-auto max-w-uwide flex flex-center flex-col bg-neutral-900 px-4 py-8 lg:py-12 lg:rounded-8 relative">
            <div className="container 2xl:max-w-default mx-auto flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
              <div className="shrink-0 grow-0 lg:basis-[304px]">
                <div className="w-[208px] h-[168px] shrink-0 grow-0 bg-white rounded-6 flex items-center justify-center">
                  <img
                    className="w-[168px] h-auto"
                    src={content.featuredLogoURL}
                    alt={content.company.name}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-6 text-left">
                <h2 className="text-h3 xl:text-h2 text-neutral-300 font-semibold">
                  {content.title}
                </h2>
                <div className="flex flex-col gap-2">
                  <p className="text-p">A conversation with:</p>
                  <div className="flex gap-2">
                    <img
                      className="h-[40px] w-[40px] rounded-full"
                      src={content.authorPhotoURL}
                      alt={content.authorName}
                    />
                    <div className="flex flex-col">
                      <h5 className="text-h6 text-neutral-300 font-semibold">
                        {content.authorName}
                      </h5>
                      <p className="text-small">{content.authorPosition}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}

      <div className="flex lg:hidden justify-center mb-12 bg-neutral-900">
        {content.featuredImageURL && (
          <img
            src={content.featuredImageURL}
            srcSet={content.featuredImageSet}
            alt={content.title}
          />
        )}
      </div>

      <section data-id="cs-body" className="px-4 lg:px-8 mb-24">
        <div className="container 2xl:max-w-default mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16">
          <aside
            data-id="cs-sidebar"
            className="flex flex-col items-start shrink-0 grow-0 basis-[304px] order-last lg:order-first lg:pb-8"
          >
            <p className="text-p font-semibold text-neutral-300 mb-2">
              Company
            </p>
            <p className="text-p mb-6">{content.company.name}</p>
            <p className="text-p font-semibold text-neutral-300 mb-2">About</p>
            <p className="text-p mb-6">{content.company.description}</p>
            <p className="text-p font-semibold text-neutral-300 mb-2">
              Industry
            </p>
            <p className="text-p mb-6">{content.company.industry}</p>
            {content.company.size && (
              <>
                <p className="text-p font-semibold text-neutral-300 mb-2">
                  Company size
                </p>
                <p className="text-p mb-6">{content.company.size} employees</p>
              </>
            )}
            <p className="text-p font-semibold text-neutral-300 mb-2">
              Location
            </p>
            <p className="text-p mb-6">{content.company.location}</p>
            <p className="text-p font-semibold text-neutral-300 mb-2">
              Product
            </p>
            <a
              href={content.productURL}
              target="_blank"
              rel="noreferrer"
              className="text-p mb-6 text-primary-300 hover:text-primary-400"
            >
              {content.productName}
            </a>
            <p className="text-p font-semibold text-neutral-300 mb-2">
              Quave services
            </p>
            <p className="text-p mb-6">{content.services}</p>
            {content.techStack.length > 0 && (
              <>
                <p className="text-p font-semibold text-neutral-300 mb-2">
                  Tech stack
                </p>
                <div className="flex gap-8 justify-start flex-wrap items-center xl:w-full">
                  {content.techStack.map((tech, index) => (
                    <img
                      key={index}
                      className="w-[75px] h-auto shrink-0 grow-0"
                      src={`/images/case-study-tech-${tech}.png`}
                      alt={tech}
                    />
                  ))}
                </div>
              </>
            )}
          </aside>

          <article data-id="cs-content" className="grow xl:pr-36 lg:mb-8">
            {content.testimonial && (
              <>
                <h6
                  data-id="cs-testimonial"
                  className="text-h6 text-neutral-300 mb-6"
                >
                  "{content.testimonial}"
                </h6>
                <p className="text-p">
                  — {content.authorName}, {content.authorPosition}
                </p>
                <div className="h-px w-full bg-neutral-800 my-6" />
              </>
            )}

            {content.text}

            <div className="h-px w-full bg-neutral-800 mt-8" />

            <div className="hidden lg:block mt-8">
              <NextCS />
            </div>
          </article>

          <div className="block lg:hidden order-last">
            <div className="h-px w-full bg-neutral-800 mb-8" />
            <NextCS />
          </div>
        </div>
      </section>
    </>
  );
};

export default TemplateCS;
