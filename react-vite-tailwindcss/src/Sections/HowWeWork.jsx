
import React from 'react';

const HowWeWork = () => {
  return (
    <>
      <div className="container mx-auto 2xl:max-w-default flex flex-col items-center text-center px-4 lg:px-8">
        <h2 className="text-h3 md:text-h2 mb-2 font-semibold text-neutral-300">
          How We Work
        </h2>
        <h6 className="text-p md:text-h6 mb-14 max-w-small">
          We can handle a project from start to finish or collaborate with your
          product or engineering team on a continuous engagement with a
          dedicated team of experts.
        </h6>
      </div>
      <section data-id="how-we-work" className="px-4 lg:px-8 mb-24">
        <div className="container mx-auto 2xl:max-w-default flex flex-col items-center lg:items-stretch lg:flex-row gap-8">
          <div
            data-id="how-we-work-project-on-deman"
            className="flex flex-col gap-4 items-start lg:max-w-auto"
          >
            <div className="h-[48px] flex flex-center">
              {/* <FontAwesomeIcon
                icon={faFolderGear}
                className="text-coral-300 h-8 w-8"
              /> */}
            </div>
            <h4 className="text-h5 md:text-h4 font-semibold text-neutral-300">
              Project on demand
            </h4>
            <p className="text-p">
              Delegate your entire project or demand to Quave, and we will be
              responsible for the end-to-end delivery. A fixed price with a
              fixed scope.
            </p>
            <small className="text-small opacity-75 flex flex-nowrap gap-2 items-center">
              {/* <FontAwesomeIcon
                icon={faInfoCircle}
                className="text-neutral-500 h-5 w-5"
              /> */}
              <span className="pr-10">
                Ideal for companies that have well-defined needs and a clear
                scope of work.
              </span>
            </small>
          </div>
          <div
            data-id="how-we-work-agile"
            className="flex flex-col gap-4 items-start lg:max-w-auto"
          >
            <div className="h-[48px] flex flex-center">
              {/* <FontAwesomeIcon
                icon={faHandshake}
                className="text-coral-300 h-10 w-10"
              /> */}
            </div>
            <h4 className="text-h5 md:text-h4 font-semibold text-neutral-300">
              IT partner
            </h4>
            <p className="text-p">
              We allocate a multidisciplinary development team that follows the
              Agile methodology to deliver your project and adapt to your needs.
            </p>
            <small className="text-small opacity-75 flex flex-nowrap gap-2 items-center">
              {/* <FontAwesomeIcon
                icon={faInfoCircle}
                className="text-neutral-500 h-5 w-5"
              /> */}
              <span className="pr-10">
                Ideal for companies that lack an in-house IT department or want
                to enhance their IT capabilities.
              </span>
            </small>
          </div>
          <div
            data-id="how-we-work-augmentation"
            className="flex flex-col gap-4 items-start lg:max-w-auto"
          >
            <div className="h-[48px] flex flex-center">
              {/* <FontAwesomeIcon
                icon={faUserGroupSimple}
                className="text-coral-300 h-10 w-10"
              /> */}
            </div>
            <h4 className="text-h5 md:text-h4 font-semibold text-neutral-300">
              Team augmentation
            </h4>
            <p className="text-p">
              Backed by our recruitment experts, we allocate the right people to
              augment your team and work within your processes.
            </p>
            <small className="text-small opacity-75 flex flex-nowrap gap-2 items-center">
              {/* <FontAwesomeIcon
                icon={faInfoCircle}
                className="text-neutral-500 h-5 w-5"
              /> */}
              <span className="pr-10">
                Ideal for companies that already have a team in place but want
                to augment or fill a position.
              </span>
            </small>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowWeWork;
