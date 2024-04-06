import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RoutePaths } from '@/router/RoutePaths';
import {
  CloseOutlined,
  ArrowDownOutlined,
  DownOutlined,
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  MenuOutlined
} from '@ant-design/icons';


const LinkComponent = ({ children, href, onClick, externalLink, ...rest }) => {
  return (
    (onClick && (
      <a onClick={onClick} {...rest}>
        {children}
      </a>
    )) ||
    (externalLink && (
      <a href={href} target="_blank" rel="noreferrer" {...rest}>
        {children}&nbsp;
        {<MenuOutlined />}
      </a>
    )) ||
    (!onClick && !externalLink && (
      <Link to={href} {...rest}>
        {children}
      </Link>
    ))
  );
};
const Header = ({ toggleContactUs }) => {
  const [activeMainNavigation, setActiveMainNavigation] = useState('');

  const [expandMobile, setExpandMobile] = useState(false);

  const location = useLocation();
  useEffect(() => {
    setExpandMobile(false);
    setActiveMainNavigation('');
  }, [location.pathname]);

  const links = [
    {
      title: 'Home',
      props: { href: RoutePaths.HOME },
      children: [],
    },
    {
      title: 'Services',
      props: {
        onClick: () => {
          setActiveMainNavigation(
            activeMainNavigation === 'Services' ? '' : 'Services'
          );
        },
      },
      children: [
        {
          title: 'Web development',
          props: { href: RoutePaths.SERVICES_WEB_DEV },
        },
        {
          title: 'Mobile development',
          props: { href: RoutePaths.SERVICES_MOBILE_DEV },
        },
        {
          title: 'Product design',
          props: { href: RoutePaths.SERVICES_DESIGN },
        },
        {
          title: 'Consulting',
          props: { href: RoutePaths.SERVICES_CONSULTING },
        },
        {
          title: 'Performance Analysis',
          props: { href: RoutePaths.SERVICES_PERFORMANCE_ANALYSIS },
        },
        {
          title: 'DevOps',
          props: { href: RoutePaths.SERVICES_DEVOPS },
        },
        {
          title: 'Marketing websites',
          props: { href: RoutePaths.SERVICES_MARKETING_WEBSITES },
        },
        {
          title: 'Meteor',
          props: { href: RoutePaths.SERVICES_METEOR },
        },
        {
          title: 'zCloud - Cloud hosting',
          props: {
            href: 'https://zcloud.ws/',
            target: '_blank',
            externalLink: true,
          },
        },
      ],
    },
    {
      title: 'Case studies',
      props: { href: RoutePaths.CASE_STUDIES },
      children: [],
    },
    {
      title: 'About Us',
      props: { href: RoutePaths.ABOUT_US },
      children: [],
    },
  ];

  function isActive({ href, children = [] }) {
    return (
      location.pathname === href ||
      children.find((c) => c.props.href === location.pathname)
    );
  }
  function toggleMobile() {
    setExpandMobile(!expandMobile);
  }

  return (
    <>
      <section
        data-id="header"
        className="px-4 py-6 md:my-4 sticky top-0 bg-white_A92 z-[1]"
      >
        <div className="container 2xl:max-w-default mx-auto flex items-center">
          <Link to={RoutePaths.HOME} data-id="logo" className="block">
            <div className="w-[160px]">
              <img
                className="block"
                src={'@/assets/images/logo-quave.svg'}
                alt="Logo"
              /></div>
          </Link>
          <nav className="grow flex justify-end items-center">
            <button
              data-id="mobile-nav-trigger"
              className="md:hidden py-1 px-3 -mr-2"
              onClick={toggleMobile}
            >
              {<MenuOutlined />}
            </button>
            <ul
              data-id="desktop-nav"
              className="md:flex items-center gap-4 hidden"
            >
              {links.map(({ title, props, children }) => (
                <li key={title} className="ml-1 relative">
                  <LinkComponent
                    className={`text-p text-neutral-300 hover:text-primary-300 flex gap-2 items-center cursor-pointer pt-2 pb-1 border-b-2 ${isActive({ ...props, children })
                      ? 'border-primary-300'
                      : 'border-transparent'
                      }`}
                    {...props}
                  >
                    {title}
                    {children.length > 0 && (
                      <DownOutlined />
                    )}
                  </LinkComponent>
                  {children.length > 0 && (
                    <ul
                      className={`absolute left-0 top-[100%] min-w-[240px] mt-2 bg-white p-4 flex flex-col items-start gap-4 rounded-2 drop-shadow-xl ${activeMainNavigation === title ? '' : 'hidden'
                        }`}
                    >
                      {children.map(({ title, props }) => (
                        <LinkComponent
                          key={title}
                          className={`text-p text-neutral-300 hover:text-primary-300 cursor-pointer ${isActive(props)
                            ? 'border-b-2 pb-1 border-primary-300'
                            : ''
                            }`}
                          {...props}
                        >
                          {title}
                        </LinkComponent>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="inline-block ml-4">
                <button className="btn-primary" onClick={toggleContactUs}>
                  Contact Us
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <nav
        data-id="mobile-nav"
        className={`fixed top-0 right-0 bottom-0 left-0 bg-black_A92 z-10 overflow-auto p-16 xxs:p-20 ${expandMobile ? '' : 'hidden'
          }`}
      >
        <button
          className="fixed top-[20px] right-[14px] text-white p-2"
          onClick={toggleMobile}
        ><CloseOutlined />
        </button>
        <ul className="flex flex-col gap-8">
          {links.map(({ title, props, children }) => (
            <li key={title} className="ml-1 relative">
              <LinkComponent
                className={`text-h5 text-white hover:text-primary-300 flex gap-2 items-center cursor-pointer ${isActive({ ...props, children })
                  ? 'border-b-2 pb-1 border-primary-300'
                  : ''
                  }`}
                {...props}
              >
                {title}
                {children.length > 0 && (
                  < SyncOutlined />
                )}
              </LinkComponent>
              {children.length > 0 && (
                <ul
                  className={`mt-4 p-4 pr-0 flex flex-col gap-8 ${activeMainNavigation === title ? '' : 'hidden'
                    }`}
                >
                  {children.map(({ title, props }) => (
                    <LinkComponent
                      key={title}
                      className={`text-p text-neutral-800 hover:text-primary-300 ${isActive(props)
                        ? 'border-b pb-1 border-primary-300'
                        : ''
                        }`}
                      {...props}
                    >
                      {title}
                    </LinkComponent>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="inline-block">
            <button className="btn-primary" onClick={toggleContactUs}>
              Contact Us
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
