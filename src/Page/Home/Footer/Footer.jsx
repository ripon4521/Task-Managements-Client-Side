import React from 'react';

const Footer = () => {
  return (
    <footer className="block">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24">
        {/* Component */}
        <div className="flex flex-row justify-between max-[767px]:flex-col max-[767px]:items-start">
          <div className="max-[767px] w-full max-w-[560px] max-[991px] mr-4 max-[991px] flex-initial">
            <h2 className="text-3xl font-bold md:text-5xl"> Lightning Fast Webflow Dev made easy </h2>
          </div>
          <div className="max-[767px] max-[991px] ml-4 max-[991px] flex-none max-[767px] mt-8">
            <div className="mb-4 flex max-w-[272px] items-start justify-start">
              <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f6e257ec977d799ff999_MapPin-2.svg" alt="" className="mr-3 inline-block" />
              <p className="text-[#636262] max-[479px] text-sm"> 8502 Preston Rd. Inglewood, Maine 98380, USA </p>
            </div>
            <div className="mb-4 flex max-w-[272px] items-start justify-start">
              <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f6e24e55dd49a541fd06_EnvelopeSimple-3.svg" alt="" className="mr-3 inline-block" />
              <p className="text-[#636262] max-[479px] text-sm"> support@flowspark.co </p>
            </div>
          </div>
        </div>
        <div className="mb-14 mt-16 w-full border-b border-solid border-black"></div>
        <div className="flex flex-row justify-between max-[991px] items-center max-[767px] flex-col max-[767px] items-start max-[479px] flex-col-reverse">
          <div className="max-[991px] text-center font-semibold max-[991px] py-1 max-[479px] mb-4 sm:text-center">
            <NavLink href="#" text="About" />
            <NavLink href="#" text="Features" />
            <NavLink href="#" text="Works" />
            <NavLink href="#" text="Support" />
            <NavLink href="#" text="Help" />
          </div>
          <div className="max-[991px] flex-none">
            <p className="text-[#636262] max-[479px] text-sm"> © Copyright 2021. All rights reserved. </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const NavLink = ({ href, text }) => {
  return (
    <a href={href} className="inline-block py-1.5 pr-6 font-normal text-[#636262] transition hover:text-[#276EF1] sm:py-2 sm:pr-6 lg:pr-12">
      {text}
    </a>
  );
};

export default Footer;
