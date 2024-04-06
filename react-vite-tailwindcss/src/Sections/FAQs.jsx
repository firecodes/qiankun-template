import React, { useState } from 'react';

const FAQs = () => {
  const faqs = [
    {
      question: 'How specialized is your workforce?',
      text: 'We have senior developers, product designers, and managers with at least five years of experience (most have 10+) and a proven track record.',
    },
    {
      question: 'Is your work schedule in sync with the one in the US?',
      text: 'Yes. Most people here work from 7 am - 4 pm Eastern Time.',
    },
    {
      question: 'Do the members of your team speak English?',
      text: 'Yes. Fluently. Most of our people have worked remotely for companies in North America & Europe their entire careers.',
    },
    {
      question: 'How do your fees compare to US-based companies?',
      text: 'Our fees are a bit lower. Being based in Brazil and having employees throughout the world helps us keep competitive prices for our services while not sacrificing quality but we pay everyone a fair amount for their talent and in dollars so we are not the right choice if your goal is to have a low price at all cost.',
    },
    {
      question: 'How much experience do you have with Meteor?',
      text: 'Over 10 years of experience. We’ve been working with Meteor since it was released back in 2012. Our team members are core contributors, our CEO, Filipe Nevola, is Meteor’s ex-CEO and a world-renowned expert.',
    },
  ];

  const [activeQuestion, setActiveQuestion] = useState('');

  const toggleActiveQuestion = (question) => () =>
    setActiveQuestion(question === activeQuestion ? '' : question);

  return (
    <>
      <section data-id="faqs" className="px-4 lg:px-8 mb-24">
        <div className="container mx-auto 2xl:max-w-default flex flex-col lg:flex-row gap-12">
          <div
            data-id="faqs-title"
            className="shrink-0 grow-0 lg:basis-[460px]"
          >
            <h3 className="text-h3 text-neutral-300 font-semibold mb-2 text-center md:text-left">
              Questions? We have answers
            </h3>
            <h6 className="text-p md:text-h6 text-neutral-500 mb-6 text-center md:text-left">
              Things you might want to know before you start working with us.
            </h6>
          </div>
          <div id="faqs-list" className="flex-auto">
            <ul className="flex flex-col gap-6">
              {faqs.map(({ question, text }) => (
                <li key={question} className="pb-6 border-b border-neutral-800">
                  <div
                    className="flex flex-nowrap cursor-pointer"
                    onClick={toggleActiveQuestion(question)}
                  >
                    <h5 className="text-h5 text-neutral-300 font-semibold grow">
                      {question}
                    </h5>
                    <button>
                      {/* <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`text-neutral-500 h-5 w-5 ${activeQuestion === question ? 'rotate-180' : ''
                          }`}
                      /> */}
                    </button>
                  </div>
                  <p
                    className={`text-p text-neutral-500 mt-4 ${activeQuestion === question ? '' : 'hidden'
                      }`}
                  >
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQs;
