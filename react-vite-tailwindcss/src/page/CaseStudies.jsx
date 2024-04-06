import { nextCsList } from '@/CaseStudies/Next';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const featuredCS = ['petparker', 'montiapm', 'sostena'];

export const FeaturedCaseStudies = ({
  selectedCS = featuredCS,
  showFeaturedImage = false,
}) => (
  <div className="mx-auto max-w-default grid grid-cols-1 lg:grid-cols-3 gap-8">
    {selectedCS.map((selectedCSItem, index) => {
      return nextCsList.map((nextCS) => {
        return (
          selectedCSItem === nextCS.id && (
            <div
              data-id="cs-featured"
              className={`bg-neutral-900 rounded-8 flex flex-col sm:flex-row lg:flex-col p-8 ${showFeaturedImage ? 'lg:p-0' : 'gap-8'
                }`}
              key={index}
            >
              <Link
                to={nextCS.URL}
                className={`bg-white flex flex-center shrink-0 grow-0 border-2 border-neutral-900 transition-transform hover:scale-110 rounded-6 p-2 ${showFeaturedImage
                  ? 'lg:hidden w-full sm:w-[157px] md:h-full min-h-[135px] md:w-[210px] md:min-h-[180px]'
                  : 'min-h-[175px]'
                  }`}
              >
                <img
                  className="max-w-[135px]"
                  src={nextCS.featuredLogoURL}
                  alt={nextCS.company}
                />
              </Link>
              <div
                className={`flex flex-col gap-6 grow ${showFeaturedImage && 'pt-6 sm:p-8 sm:pb-0'
                  }`}
              >
                <Link
                  to={nextCS.URL}
                  className="text-h5 text-neutral-300 hover:text-primary-300 font-semibold"
                >
                  {nextCS.title}
                </Link>

                <div className="flex flex-col gap-2">
                  <p className="text-p">A conversation with:</p>
                  <div className="flex gap-2">
                    <img
                      className="h-[40px] w-[40px] rounded-full"
                      src={nextCS.authorPhotoURL}
                      alt={nextCS.authorName}
                    />
                    <div className="flex flex-col">
                      <h5 className="text-p text-neutral-300 font-semibold">
                        {nextCS.authorName}
                      </h5>
                      <p className="text-small">{nextCS.authorPosition}</p>
                    </div>
                  </div>
                </div>
                <Link
                  to={nextCS.URL}
                  className="text-primary-300 hover:text-primary-400"
                >
                  Read Case Study →
                </Link>
              </div>
              {showFeaturedImage && (
                <img
                  className="w-full hidden lg:block rounded-8"
                  srcSet={nextCS.featuredImageURL}
                  alt={nextCS.company}
                />
              )}
            </div>
          )
        );
      });
    })}
  </div>
);

export const CaseStudiesPage = () => {
  const [filter, setFilter] = useState('all');

  const hasFilter = filter !== 'all';
  const filteredNextCS = nextCsList.filter(
    (nextCS) => !hasFilter || nextCS.tags.includes(filter)
  );

  return (
    <>
      <section data-id="cs-header" className="px-4 lg:px-8 my-16">
        <div className="container 2xl:max-w-default mx-auto ">
          <h2 className="text-h3 md:text-h2 font-semibold text-neutral-300 text-center">
            Featured case studies
          </h2>
        </div>
      </section>

      <section data-id="cs-featured-list" className="mb-8 px-4">
        <FeaturedCaseStudies showFeaturedImage />
      </section>

      <section data-id="cs-short-list" className="px-4 lg:px-8 my-16">
        <div className="container 2xl:max-w-default mx-auto ">
          <div className="mb-6 flex items-center gap-2">
            <h4 className="text-h4 text-neutral-300 font-semibold grow">
              Case studies
            </h4>
            <div className="relative border border-neutral-800 rounded-2 w-[220px]">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full appearance-none rounded-2 bg-white py-2 px-3 pr-8 text-p"
              >
                <option value="all">All industries & services</option>

                <optgroup label="Industries">
                  <option value="e-commerce">E-commerce</option>
                  <option value="tech">Tech & Innovation</option>
                  <option value="events">Events</option>
                  <option value="fintech">Fintech</option>
                  <option value="pet">Pet</option>
                  <option value="agrotech">Agrotech</option>
                  <option value="sales">Sales</option>
                  <option value="crm">CRM</option>
                  <option value="project-management">Project Management</option>
                </optgroup>

                <optgroup label="Services">
                  <option value="web-dev">Web Development</option>
                  <option value="mobile-dev">Mobile Development</option>
                  <option value="design">Product Design</option>
                  <option value="consulting">Consulting</option>
                  <option value="devops">DevOps</option>
                  <option value="performance-analysis">
                    Performance Analysis
                  </option>
                  <option value="website">Website</option>
                  <option value="meteor">Meteor Services</option>
                </optgroup>
              </select>
              {/* <FontAwesomeIcon
                icon={faChevronDown}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-small "
              /> */}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredNextCS.map((nextCS, index) => {
              return (
                (hasFilter || !featuredCS.includes(nextCS.id)) && (
                  <div
                    data-id="short-cs"
                    className="bg-neutral-900 rounded-8 p-8 md:p-2 flex flex-col sm:flex-row items-start sm:items-center gap-8"
                    key={nextCS.title}
                  >
                    <Link
                      to={nextCS.URL}
                      className="bg-white flex flex-center border-2 border-neutral-900 transition-transform hover:scale-110 shrink-0 grow-0 w-full sm:w-[157px] md:h-full min-h-[135px] md:w-[210px] md:min-h-[180px] rounded-6 p-2"
                    >
                      <img
                        className="max-w-[135px]"
                        src={nextCS.featuredLogoURL}
                        alt={nextCS.company}
                      />
                    </Link>
                    <div className="flex flex-col gap-6 grow md:pr-8 md:py-4">
                      <p className="text-p">{nextCS.title}</p>
                      <Link
                        to={nextCS.URL}
                        className="text-primary-300 hover:text-primary-400"
                      >
                        Read Case Study →
                      </Link>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
