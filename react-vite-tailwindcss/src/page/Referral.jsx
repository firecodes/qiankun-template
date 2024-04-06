import React, { useState } from 'react';
import { validateEmail } from '@/utils/email';

const webDevServices = [
  {
    icon: 'faBrush',
    title: 'Refer',
    text: 'Complete the referral form by providing the details of individuals or businesses you think would find value in our services.',
  },
  {
    icon: 'faCode',
    title: 'Evaluation',
    text: 'Once the referral is submitted, our team will promptly connect with the referred party. If a successful deal is closed, you will be eligible for a reward.',
  },
  {
    icon: 'faCloud',
    title: 'Reward',
    text: 'Enjoy a 10% commission, deposited directly into your bank account, based on the value of the closed deal. The maximum reward limit is $1,000.',
  },
];

const faqs = [
  {
    question: 'How will I know if my referral closed a deal?',
    text: (
      <>
        We will write an email to you as soon as we have a closed deal with your
        referral. You can also contact us at any time at{' '}
        <a href="mailto:contact@quave.dev" className="text-primary-300">
          contact@quave.dev
        </a>{' '}
        if you have any questions.
      </>
    ),
  },
  {
    question: 'How long does it take to receive my reward?',
    text: 'We will pay out after the successful completion of the contract with the referral as soon as we are paid by them.',
  },
  {
    question: 'Can I refer as many people or businesses as I want?',
    text: 'Yes, there are no limits.',
  },
  {
    question: 'What services does your company offer?',
    text: 'Web app, mobile app, product design, DevOps, IT consulting, and much more. Check all our services on our home page.',
  },
];

const referralTypes = {
  individual: {
    value: 'individual',
    label: 'Individual',
  },
  business: {
    value: 'business',
    label: 'Business',
  },
  friend: {
    value: 'friend',
    label: 'Friend',
  },
};

export const ReferralPage = () => {
  const [fromName, setFromName] = useState('');
  const [fromEmail, setFromEmail] = useState('');
  const [fromEmailInitialTyping, setFromEmailInitialTyping] = useState(true);
  const [errorFromEmail, setErrorFromEmail] = useState('');

  const [referralName, setReferralName] = useState('');
  const [referralPhoneNumber, setReferralPhoneNumber] = useState('');
  const [referralType, setReferralType] = useState(
    referralTypes.individual.value
  );
  const [referralEmail, setReferralEmail] = useState('');
  const [referralEmailInitialTyping, setReferralEmailInitialTyping] =
    useState(true);
  const [errorReferralEmail, setErrorReferralEmail] = useState('');

  const [details, setDetails] = useState('');
  const [howYouKnow, setHowYouKnow] = useState('');

  const [agreeToTheTerms, setAgreeToTheTerms] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);

  const [activeQuestion, setActiveQuestion] = useState('');
  const toggleActiveQuestion = (question) => () =>
    setActiveQuestion(question === activeQuestion ? '' : question);

  const [activeTerms, setActiveTerms] = useState('');
  const toggleActiveTerms = () => setActiveTerms(!activeTerms);

  function reset() {
    setFromName('');
    setFromEmail('');
    setReferralName('');
    setReferralEmail('');
    setDetails('');
    setHowYouKnow('');
    setErrorFromEmail('');
    setReferralPhoneNumber('');
    setReferralType(referralTypes.individual.value);
    setErrorReferralEmail('');
    setError('');
    setSending(false);
    setAgreeToTheTerms(false);
  }

  const prepareEmailContent = () => {
    let content = '<strong>Referral contact</strong><br/>\n';
    content += `Referral's name: ${referralName}<br/>`;
    content += `Referral's email: ${referralEmail}<br/>`;
    content += referralPhoneNumber
      ? `Referral's phone number: ${referralPhoneNumber}<br/>`
      : '';
    content += `Referral type: ${referralTypes[referralType].label}<br/><br/>`;

    if (details) {
      content += `<strong>Details</strong><br/>`;
      content += `${details}<br/><br/>`;
    }

    if (howYouKnow) {
      content += `<strong>How I know them</strong><br/>`;
      content += `${howYouKnow}<br/><br/>`;
    }

    return content;
  };

  const validateRequiredFields = () => {
    const fromEmailValid = isValidFromEmail()();
    const referralEmailValid = isValidReferralEmail()();

    return (
      agreeToTheTerms &&
      referralName &&
      fromName &&
      fromEmailValid &&
      referralEmailValid
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validateRequiredFields()) {
      setError('The form has errors. You need to fix them before you can submit the form.');
      return;
    }

    let body = JSON.stringify({
      fromEmail,
      fromName: fromName || 'Unknown',
      content: prepareEmailContent(details),
      to: 'contato@quave.com.br',
      from: 'contato@quave.com.br',
      subject: `New referral from ${fromName}`,
    });

    setSending(true);
    // it needs to have www, otherwise cloudfront is blocking it
    fetch('https://www.codeftw.dev/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    })
      .then(() => {
        reset();
        setSuccess(true);
      })
      .catch((e) => {
        setError(
          'Unknown error happened, please send directly by email to contact@quave.com.br'
        );
        setSuccess(false);
        setSending(false);
        console.error(`Error sending email`, e);
      });
  };

  const isValidEmail =
    ({ fromEmailChanged, defaultEmail, setInitialTyping, setErrorEmail }) =>
      () => {
        const email = fromEmailChanged || defaultEmail;

        setInitialTyping(false);
        if (!email) {
          setErrorEmail('Enter an email address.');
          return false;
        }
        if (!validateEmail(email)) {
          setErrorEmail('Enter a valid email address.');
          return false;
        }
        setErrorEmail('');
        return true;
      };

  const isValidFromEmail = (value) =>
    isValidEmail({
      fromEmailChanged: value,
      defaultEmail: fromEmail,
      setErrorEmail: setErrorFromEmail,
      setInitialTyping: setFromEmailInitialTyping,
    });

  const isValidReferralEmail = (value) =>
    isValidEmail({
      fromEmailChanged: value,
      defaultEmail: referralEmail,
      setErrorEmail: setErrorReferralEmail,
      setInitialTyping: setReferralEmailInitialTyping,
    });

  let onChangeFromEmail = ({ target: { value } }) => {
    setFromEmail(value);
    if (!fromEmailInitialTyping) {
      isValidFromEmail(value)();
    }
  };

  let onChangeFromReferralEmail = ({ target: { value } }) => {
    setReferralEmail(value);
    if (!referralEmailInitialTyping) {
      isValidReferralEmail(value)();
    }
  };

  return (
    <>
      <section data-id="hero" className="sm:px-4">
        <div className="mx-auto max-w-uwide flex flex-center flex-col bg-amethyst-300 bg-service-other sm:rounded-8 lg:h-[500px] xl:h-[620px]">
          <div className="container 2xl:max-w-default text-white text-center py-16 px-4">
            <h1 className="text-h3 md:text-h2 lg:text-h1 font-bold mb-4 max-w-[750px] mx-auto">
              Love Quave? Share the Love, Earn Rewards!
            </h1>
            <h6 className="text-p lg:text-h6 mb-8 max-w-[700px] mx-auto">
              If our services have exceeded your expectations, help us spread the word!
              Join our Referral Program today and enjoy the opportunity to earn
              up to $1,000. Your recommendation matters.
            </h6>
          </div>
        </div>
      </section>

      <div
        data-id="how-it-works-title"
        className="container mx-auto 2xl:max-w-default flex flex-col items-center text-center px-4 lg:px-8 mt-24"
      >
        <h2 className="text-h3 md:text-h2 mb-14 font-semibold text-neutral-300">
          How it works: referring Quave
        </h2>
      </div>
      <section data-id="how-it-works" className="px-4 lg:px-8 mb-24">
        <div className="container 2xl:max-w-default mx-auto">
          <ul className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {webDevServices.map(({ icon, title, text }, index) => (
              <li key={index}>
                <span className="w-10 h-10 rounded-full border-[3px] border-amethyst-300 text-amethyst-300 flex items-center justify-center text-h5 font-semibold mb-4">
                  {index + 1}
                </span>
                <h4 className="text-h4 font-semibold text-neutral-300 mb-4">
                  {title}
                </h4>
                <p className="text-p">{text}</p>
              </li>
            ))}
          </ul>
          <hr className="my-12 border-neutral-800" />
          <div className="flex gap-12 flex-col lg:flex-row">
            <div
              data-id="meteor-services-title"
              className="shrink-0 grow-0 lg:basis-[360px] xl:basis-[460px]"
            >
              <h3 className="text-h3 text-neutral-300 font-semibold mb-2">
                Why refer us?
              </h3>
              <h6 className="text-p md:text-h6 text-neutral-500 mb-6">
                Empower your network, earn extra income, and be part of our
                mission to connect clients with innovation.
              </h6>
            </div>
            <div data-id="meteor-services-list" className="flex-auto">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <li>
                  <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                    Empower your network
                  </h5>
                  <p className="text-p text-neutral-500">
                    If you've had a positive experience working with us, help others
                    enjoy the same level of excellence.
                  </p>
                </li>
                <li>
                  <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                    Boost your income
                  </h5>
                  <p className="text-p text-neutral-500">
                    Earn extra income for every successful referral, enhancing
                    your financial well-being.
                  </p>
                </li>
                <li>
                  <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                    Join our vision
                  </h5>
                  <p className="text-p text-neutral-500">
                    Become a part of our mission to link more clients with
                    cutting-edge tech solutions and innovation.
                  </p>
                </li>
                <li>
                  <h5 className="text-h5 text-neutral-300 font-semibold mb-2">
                    Stay ahead of opportunities
                  </h5>
                  <p className="text-p text-neutral-500">
                    You'll receive exclusive early access to upcoming programs
                    and initiatives from Quave.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div
        data-id="referral-form-title"
        className="container mx-auto 2xl:max-w-default flex flex-col items-center text-center px-4 lg:px-8 mt-24"
      >
        <h2 className="text-h3 md:text-h2 mb-4 font-semibold text-neutral-300">
          Referral form
        </h2>
        <h6 className="text-p md:text-h6 mb-8 max-w-small">
          Ready to refer? Fill out the form and help others discover our
          top-tier tech solutions.
        </h6>
      </div>
      <section data-id="referral-form" className="px-4 lg:px-8 mb-24">
        <div className="container 2xl:max-w-default mx-auto">
          <form className="p-5 sm:p-8 bg-neutral-900 rounded-6 max-w-[580px] mx-auto">
            <label className="flex flex-col gap-1 mb-2">
              <span className="text-p">Your name:</span>
              <input
                type="text"
                className={`border border-neutral-800 rounded-2 text-p text-neutral p-2 text-neutral-300  ${error && !fromName.trim() ? 'border-error border-2' : ''
                  }`}
                onChange={({ target: { value } }) => setFromName(value)}
                value={fromName}
              />
            </label>
            {error && !fromName.trim() && (
              <p className="text-small text-error -mt-1 mb-6">
                Enter your name.
              </p>
            )}
            <label className="flex flex-col gap-1 mb-2">
              <span className="text-p">Your email:</span>
              <input
                type="email"
                className={`border border-neutral-800 rounded-2 text-p text-neutral p-2 text-neutral-300 ${errorFromEmail ? 'border-error border-2' : ''
                  }`}
                onChange={onChangeFromEmail}
                onBlur={isValidFromEmail()}
                value={fromEmail}
              />
            </label>
            {errorFromEmail && (
              <p className="text-small text-error -mt-1 mb-6">
                {errorFromEmail}
              </p>
            )}
            <label className="flex flex-col gap-1 mb-2">
              <span className="text-p">Referral's name:</span>
              <input
                type="email"
                className={`border border-neutral-800 rounded-2 text-p text-neutral p-2 text-neutral-300  ${error && !referralName.trim() ? 'border-error border-2' : ''
                  }`}
                onChange={({ target: { value } }) => setReferralName(value)}
                value={referralName}
              />
            </label>
            {error && !referralName.trim() && (
              <p className="text-small text-error -mt-1 mb-6">
                Enter the referral's name.
              </p>
            )}
            <label className="flex flex-col gap-1 mb-2">
              <span className="text-p">Referral's email:</span>
              <input
                type="email"
                className={`border border-neutral-800 rounded-2 text-p text-neutral p-2 text-neutral-300 ${errorReferralEmail ? 'border-error border-2' : ''
                  }`}
                onChange={onChangeFromReferralEmail}
                onBlur={isValidReferralEmail()}
                value={referralEmail}
              />
            </label>
            {errorReferralEmail && (
              <p className="text-small text-error -mt-1 mb-6">
                {errorReferralEmail}
              </p>
            )}
            <label className="flex flex-col gap-1 mb-2">
              <span className="text-p">
                Referral's Phone Number (optional):
              </span>
              <input
                type="tel"
                className={`border border-neutral-800 rounded-2 text-p text-neutral p-2 text-neutral-300`}
                onChange={({ target: { value } }) =>
                  setReferralPhoneNumber(value)
                }
                value={referralPhoneNumber}
              />
            </label>
            <label className="flex flex-col gap-1 mb-2">
              <span className="text-p">Referral Type:</span>
              <div className="relative border border-neutral-800 rounded-2">
                <select
                  value={referralType}
                  onChange={(e) => setReferralType(e.target.value)}
                  className="w-full appearance-none rounded-2 bg-white py-2 px-3 pr-8 text-p"
                >
                  {Object.values(referralTypes).map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
                {/* <FontAwesomeIcon
                  icon={faChevronDown}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-small "
                /> */}
              </div>
            </label>
            <label className="flex flex-col gap-1 mb-2">
              <span className="text-p">Details (optional):</span>
              <textarea
                onChange={({ target: { value } }) => setDetails(value)}
                value={details}
                rows={3}
                className="border border-neutral-800 rounded-2 text-p text-neutral p-2 text-neutral-300"
              />
            </label>
            <label className="flex flex-col gap-1 mb-6">
              <span className="text-p">How you know them (optional):</span>
              <textarea
                onChange={({ target: { value } }) => setHowYouKnow(value)}
                value={howYouKnow}
                rows={3}
                className="border border-neutral-800 rounded-2 text-p text-neutral p-2 text-neutral-300"
              />
            </label>
            <div className="mb-6">
              <p
                className="text-p flex items-center gap-2 cursor-pointer select-none"
                onClick={toggleActiveTerms}
              >
                {/* <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`${activeTerms ? 'rotate-180' : ''} text-small`}
                /> */}
                <span className="font-semibold">Terms and conditions</span>
              </p>
              <ul
                className={`${activeTerms ? '' : 'hidden'
                  } list-disc pl-10 pt-2 flex flex-col gap-2 text-p`}
              >
                <li>
                  The rewards will correspond to 10% of the closed's deal value,
                  but limited to $1,000.
                </li>
                <li>
                  For fixed-price contracts, the reward percentage will be
                  calculated based on the total contract deal value. For
                  hourly-based projects or resource allocation, the reward will
                  be calculated based on the amount generated in the first month
                  of the contract.
                </li>
                <li>
                  Rewards will be paid out after the successful completion of
                  the contract with the referral.
                </li>
                <li>
                  The referral campaign isn't valid for zCloud, but it's valid for all other
                  Quave Services.
                </li>
                <li>
                  The referral campaign is subject to change or termination at
                  any time.
                </li>
                <li>
                  In case of any doubts or disputes regarding the referral
                  program's terms, including reward amounts and eligibility,
                  Quave reserves the right to make the final decision, which
                  will be binding and not subject to appeal.
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <label className="flex gap-2">
                <input
                  type="checkbox"
                  checked={agreeToTheTerms}
                  onChange={() => setAgreeToTheTerms(!agreeToTheTerms)}
                />
                <span className="text-p">
                  I agree to the terms and conditions.
                </span>
              </label>
              {error && !agreeToTheTerms && (
                <p className="text-small text-error mt-1">
                  You need agree to the terms and conditions.
                </p>
              )}
            </div>
            {success && (
              <p className="text-p text-success">
                Thank you! We will contact you shortly.
              </p>
            )}
            {!success && (
              <button
                className={`btn-primary ${sending ? 'disabled opacity-50 hover:bg-primary-300' : ''
                  }`}
                type="submit"
                onClick={onSubmit}
              >
                {sending ? 'Sending...' : 'Submit referral'}
              </button>
            )}
            {error && (
              <p className="text-small text-error mt-2 mb-6">{error}</p>
            )}
          </form>
        </div>
      </section>

      <section data-id="faqs" className="px-4 lg:px-8 mb-24">
        <div className="container mx-auto 2xl:max-w-default flex flex-col lg:flex-row gap-12">
          <div
            data-id="faqs-title"
            className="shrink-0 grow-0 lg:basis-[460px]"
          >
            <h3 className="text-h3 text-neutral-300 font-semibold mb-2 text-center md:text-left">
              Frequently asked questions
            </h3>
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
