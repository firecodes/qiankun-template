import React from 'react';

const Hero = ({ toggleContactUs }) => {
  const links = [
    {
      title: 'React Logo',
      src: '/images/logo-react.png',
      className: 'max-w-[100px] lg:max-w-[135px]',
    },
    {
      title: 'Meteor Logo',
      src: '/images/logo-meteor.png',
      className: 'max-w-[100px] lg:max-w-[150px]',
    },
    {
      title: 'NodeJS Logo',
      src: '/images/logo-node.png',
      className: 'max-w-[75px] lg:max-w-[100px]',
    },
    {
      title: 'GraphQL Logo',
      src: '/images/logo-graphQL.png',
      className: 'max-w-[130px] lg:max-w-[170px]',
    },
    {
      title: 'Kubernetes Logo',
      src: '/images/logo-kubernetes.png',
      className: 'max-w-[100px] lg:max-w-[140px]',
    },
    {
      title: 'Next Js Logo',
      src: '/images/logo-next.png',
      className: 'max-w-[100px] lg:max-w-[130px]',
    },
    {
      title: 'Flutter Logo',
      src: '/images/logo-flutter.png',
      className: 'max-w-[100px] lg:max-w-[143px]',
    },
    {
      title: 'zCloud Logo',
      src: '/images/logo-zcloud.png',
      className: 'max-w-[100px] lg:max-w-[150px]',
    },
  ];

  return (
    <section data-id="hero" className="sm:px-4 mb-24">
      <div className="mx-auto max-w-uwide flex flex-center flex-col bg-hero lg:h-[660px] xl:h-[800px] sm:rounded-8">
        <div className="container 2xl:max-w-default text-white text-center py-16 px-4">
          <h1 className="text-h3 md:text-h2 lg:text-h1 font-bold mb-4">
            We design & develop
            <br />
            digital products
          </h1>
          <h6 className="text-p lg:text-h6 mb-8 opacity-75">
            Quave brings together top international experts to build the best
            <br className="hidden md:block" />
            digital experiences for innovative companies and startups.
          </h6>
          <button
            className="btn-primary btn-primary_large"
            onClick={toggleContactUs}
          >
            Contact Us
          </button>
          <div data-id="hero-logos" className="mt-12">
            <h6 className="text-p lg:text-h6 mb-4 opacity-75">
              Technologies we master
            </h6>
            <div className="max-w-[900px] mx-auto flex flex-wrap items-center justify-center gap-y-8 gap-x-8 md:gap-x-12">
              {links.map(({ src, title, className }) => (
                <img key={src} className={className} src={src} alt={title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
