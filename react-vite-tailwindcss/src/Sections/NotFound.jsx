import { RoutePaths } from '@/router/RoutePaths';

export const NotFound = ({ resetErrorBoundary }) => {
  return (
    <>
      <div className="container mx-auto 2xl:max-w-default flex flex-col items-center text-center px-4 lg:px-8">
        <div className="py-24">
          <h1 className="text-h2 md:text-h1 font-semibold text-neutral-300">
            Uh oh! Something went wrong...
          </h1>

          <div className="mt-12">
            <a
              href={RoutePaths.HOME}
              className="text-p text-primary-300 hover:text-primary-400"
            >
              &larr; Go back home page
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
