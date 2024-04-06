export const AboutUsPage = () => (
  <>
    <section data-id="about-us" className="px-4 lg:px-8 mb-24">
      <div className="container 2xl:max-w-default mx-auto flex flex-col md:flex-row gap-12">
        <div className="basis-1/2 order-last md:order-first">
          <img
            className="rounded-4"
            src="/images/quave-team.jpg"
            alt="Quave team meetup"
          />
        </div>
        <div className="basis-1/2">
          <h3 className="text-h3 text-neutral-300 font-semibold mb-6">
            About us
          </h3>
          <p className="text-p mb-4">
            We are Quave, a quirky bunch of digital nomads if there ever was
            one.
          </p>
          <p className="text-p mb-4">
            Led by the guy taking that picture over there, Filipe Nevola. A
            Brazilian-Portuguese, long-time software engineer, former Meteor
            CEO, former Provi CTO, and actual Quave CEO. Full time. Not
            part-time, like before. We can afford him now -- inside joke.
          </p>
          <p className="text-p mb-4">
            Back when he created Quave, it was just him [insert lonely song].
            But he wanted to be able to get his friends to work with him [insert
            motivational song]. So he set to do just that. He focused on
            services and on-demand work. As the team grew, we started to work
            for various companies like Embrapa, Bemarke, ClearSale.
          </p>
          <p className="text-p mb-4">
            Fast forward to this day. We got people from all the world working
            here. We're still doing quality work. We have a long list of clients
            from North America, South America and Europe. We're even built our
            own product,{' '}
            <a href="https://zcloud.ws" target="_blank" rel="noreferrer" className="text-primary-300">
              zCloud
            </a>{' '}
            - a flexible and user-friendly Cloud hosting service.
          </p>
          <p className="text-p mb-4">
            Speaking of which, in 2017 we created CodeFTW (codeftw.dev) to help
            young developers from Brazil learn how to code. There are many free
            courses there. Why? To give back to the community.
          </p>
          <p className="text-p mb-4">
            Despite having a lot of acronyms in the past, Filipe is still a
            great human being. Like the rest of us :)
          </p>
          <p className="text-p mb-4">
            TL;DR digital nomads. People in South America and Europe. Ten plus
            year of experience working on digital products. Great human beings.
            Quave = quality + velocity -- Filipe believes the balance between
            these two is the secret to creating great software.
          </p>
        </div>
      </div>
    </section>
  </>
);
