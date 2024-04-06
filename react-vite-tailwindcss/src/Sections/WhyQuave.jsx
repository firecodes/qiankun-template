const WhyQuave = () => {
  const reasons = [
    {
      title: '15+ years of experience',
      description:
        '80% of our team members are senior engineers with several years of expertise and domain knowledge.',
    },
    {
      title: 'Result oriented',
      description:
        'Unlike other software houses, we are fully committed to delivering results and not selling hours.',
    },
    {
      title: 'Long term partnerships',
      description:
        'We are here for the long-run. After the first project, at least 90% of our customers asked us to work on another one.',
    },
    {
      title: 'Flexible software partner',
      description:
        'Small enough to listen and take a bespoke approach, but big enough to scale your business with you.',
    }
  ];
  return (
    <section data-id="why-quave" className="px-4 lg:px-8 mb-24">
      <div className="container 2xl:max-w-default mx-auto flex gap-12 flex-col lg:flex-row">
        <div
          data-id="why-quave-title"
          className="shrink-0 grow-0 lg:basis-[360px] xl:basis-[460px]"
        >
          <h3 className="text-h3 text-neutral-300 font-semibold mb-2">
            Why Quave?
          </h3>
          <h6 className="text-p md:text-h6 text-neutral-500 mb-6">
            Over 20 years of software expertise, mastery of cutting-edge
            technologies, a full team to support your software needs, and a
            perfect balance of quality and speed in code delivery.
          </h6>
        </div>
        <div data-id="why-quave-list" className="flex-auto">
          <ul className="grid grid-cols-1 sm:grid-cols-2 mb-12 gap-8">
            {reasons.map(({ title, description }, index) => (
              <li key={index}>
                <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                  {title}
                </h5>
                <p className="text-p text-neutral-500">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyQuave;
