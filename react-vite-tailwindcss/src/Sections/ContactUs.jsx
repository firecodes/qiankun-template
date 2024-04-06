// curl "http://localhost:3000/api/sendFeedbackEmail" -X POST -H "Accept: application/json" -H "Content-Type: application/json" -d '{"fromEmail": "client@example.com", "fromName": "client", "content": "Olá, preciso de ajuda! Teste Filipe", "to": "contato@quave.com.br",     "from": "contato@quave.com.br", "subject": "Contact Quave Site"}'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RoutePaths } from '@/router/RoutePaths';
import { validateEmail } from "@/utils/email";

export const ContactUs = ({ showContact, setShowContact, toggleContactUs }) => {
  const [fromEmail, setFromEmail] = useState('');
  const [fromEmailInitialTyping, setFromEmailInitialTyping] = useState(true);
  const [fromName, setFromName] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [errorFromEmail, setErrorFromEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);

  const onClose = () => {
    reset();
    setSuccess(false);
    toggleContactUs();
  };

  function reset() {
    setFromEmail('');
    setFromName('');
    setContent('');
    setErrorFromEmail('');
    setError('');
    setSending(false);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail()()) {
      return;
    }
    let body = JSON.stringify({
      fromEmail,
      fromName: fromName || 'Unknown',
      content: content || 'No content',
      to: 'contato@quave.com.br',
      from: 'contato@quave.com.br',
      subject: `Contact to Quave - ${fromName} (${fromEmail})`,
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

  const isValidEmail = (fromEmailChanged) => () => {
    const email = fromEmailChanged || fromEmail;

    setFromEmailInitialTyping(false);
    if (!email) {
      setErrorFromEmail(
        'Please enter your email address. We need it to get back to you.'
      );
      return false;
    }
    if (!validateEmail(email)) {
      setErrorFromEmail(
        'Please enter a valid email address. We need it to get back to you.'
      );
      return false;
    }
    setErrorFromEmail('');
    return true;
  };

  let onChangeFromEmail = ({ target: { value } }) => {
    setFromEmail(value);
    if (!fromEmailInitialTyping) {
      isValidEmail(value)();
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 bottom-0 left-0 bg-black_A70 z-10 md:flex-center p-4 lg:p-8 overflow-auto ${showContact ? 'md:flex' : 'hidden'
        }`}
    >
      <section className="bg-white max-w-[900px] min-h-[450px] rounded-8 flex items-stretch flex-col md:flex-row md:overflow-hidden sh-large relative">
        <button
          className="absolute top-[20px] right-[20px] p-2 text-white"
          onClick={onClose}
        >
          <svg
            className="fill-neutral-300 md:fill-white"
            width="24"
            height="24"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6.28033 5.21967C5.98744 4.92678 5.51256 4.92678 5.21967 5.21967C4.92678 5.51256 4.92678 5.98744 5.21967 6.28033L8.93934 10L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L10 11.0607L13.7197 14.7803C14.0126 15.0732 14.4874 15.0732 14.7803 14.7803C15.0732 14.4874 15.0732 14.0126 14.7803 13.7197L11.0607 10L14.7803 6.28033C15.0732 5.98744 15.0732 5.51256 14.7803 5.21967C14.4874 4.92678 14.0126 4.92678 13.7197 5.21967L10 8.93934L6.28033 5.21967Z" />
          </svg>
        </button>
        <form onSubmit={onSubmit} className="p-6 md:p-8">
          <h4 className="text-h4 font-semibold text-neutral-300 mb-2">
            Get in touch
          </h4>
          <p className="text-p mb-6">
            We’ll get back to you in 24 hours or less. You can include a brief
            description of the project or we can talk about it during a call.
          </p>
          {!success && (
            <>
              <label className="flex flex-col gap-1 mb-2">
                <span className="text-p">Name (optional)</span>
                <input
                  type="text"
                  className="border border-neutral-800 rounded-2 text-p text-neutral p-2 text-neutral-300"
                  onChange={({ target: { value } }) => setFromName(value)}
                  value={fromName}
                />
              </label>
              <label className="flex flex-col gap-1 mb-2">
                <span className="text-p">Email</span>
                <input
                  type="email"
                  className={`border border-neutral-800 rounded-2 text-p text-neutral p-2 text-neutral-300 ${errorFromEmail ? 'border-error border-2' : ''
                    }`}
                  onChange={onChangeFromEmail}
                  onBlur={isValidEmail()}
                  value={fromEmail}
                />
              </label>
              {errorFromEmail && (
                <p className="text-small text-error -mt-1 mb-6">{errorFromEmail}</p>
              )}
              <label className="flex flex-col gap-1 mb-2">
                <span className="text-p">
                  Brief project description (optional):
                </span>
                <textarea
                  rows={3}
                  className="border border-neutral-800 rounded-2 text-p text-neutral p-2 text-neutral-300"
                  onChange={({ target: { value } }) => setContent(value)}
                  value={content}
                />
              </label>
            </>
          )}

          {success && (
            <p className="text-p text-success">
              Thank you! We will contact you shortly.
            </p>
          )}
          {!success && (
            <button
              className={`btn-primary btn-primary_large ${sending ? 'disabled hover:bg-primary-300' : ''
                }`}
              onClick={onSubmit}
              type="submit"
            >
              {sending ? 'Sending...' : 'Contact us'}
            </button>
          )}
          {error && <p className="text-p text-error -mt-2 mb-6">{error}</p>}
          {!success && (
            <p className="text-small mt-4">
              By submitting this information, you agree to Quave's{' '}
              <Link
                to={RoutePaths.TERMS_AND_CONDITIONS}
                className="text-primary-300 hover:text-primary-400"
              >
                Terms and Conditions
              </Link>{' '}
              and{' '}
              <Link
                to={RoutePaths.PRIVACY_POLICY}
                className="text-primary-300 hover:text-primary-400"
              >
                Privacy Policy
              </Link>
              .
            </p>
          )}
        </form>
        <div className="bg-hero hidden md:flex flex-col flex-center grow-0 shrink-0 basis-[320px] gap-6 p-16 bg-[center_left]">
          <p className="text-p text-white text-center opacity-75">
            Trusted by innovative companies worldwide
          </p>
          <div className="flex flex-center flex-wrap gap-6">
            <img
              className="mx-4 max-h-8"
              src="/images/logo-white-sostena.png"
              srcSet="/images/logo-white-sostena.png 1x, /images/logo-white-sostena@2x.png 2x"
              alt="Sostena Logo"
            />
            <img
              className="mx-4 max-h-9"
              src="/images/logo-white-montiapm.png"
              srcSet="/images/logo-white-montiapm.png 1x, /images/logo-white-montiapm@2x.png 2x"
              alt="Monti APM Logo"
            />
            <img
              className="mx-4 max-h-8"
              src="/images/logo-white-lempire.png"
              srcSet="/images/logo-white-lempire.png 1x, /images/logo-white-lempire@2x.png 2x"
              alt="Lempire Logo"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
