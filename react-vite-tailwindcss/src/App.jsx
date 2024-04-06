import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ErrorBoundary } from 'react-error-boundary';

import Header from '@/Sections/Header';
import Footer from '@/Sections/Footer';
import { NotFound } from '@/Sections/NotFound';
import { AppRoutes } from '@/router/index';
import { useEffect, useState } from 'react';
import { ContactUs } from '@/Sections/ContactUs';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      {process.env.NODE_ENV === 'development' && (
        <div className="bg-white pl-10 pt-10">
          <p>DEV ONLY!</p>
          <p>Something went wrong:</p>
          <pre>{error.message}</pre>
          <button onClick={resetErrorBoundary}>Try again</button>
        </div>
      )}
      <NotFound resetErrorBoundary={resetErrorBoundary} />
    </div>
  );
}

const browserHistory = createBrowserHistory();

const useScrollToAnchor = (pixelsToAdjust = 0) =>
  useEffect(() => {
    const anchorById = window.location.hash?.substring(1);
    if (!anchorById) {
      return;
    }
    setTimeout(() => {
      const element = document.getElementById(anchorById);
      if (!element) {
        return;
      }

      const rectAround = element.getBoundingClientRect();
      window.scrollTo({
        top: rectAround.top + window.scrollY - pixelsToAdjust,
        behavior: 'smooth',
      });
    }, 200); // make sure page is fully rendered
  }, []);

function App() {
  useScrollToAnchor(92.64); // sticky header
  const [showContact, setShowContact] = useState(false);

  function toggleContactUs() {
    setShowContact(!showContact);
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Header toggleContactUs={toggleContactUs} />
      <ContactUs
        showContact={showContact}
        setShowContact={setShowContact}
        toggleContactUs={toggleContactUs}
      />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AppRoutes toggleContactUs={toggleContactUs} />
      </ErrorBoundary>
      <Footer toggleContactUs={toggleContactUs} />
    </BrowserRouter>
  );
}

export default App;
