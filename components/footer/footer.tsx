import React, { FC } from "react";

export interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <div>
      <div className="py-4 flex flex-row justify-between sm:justify-center sm:flex-col">
        <div className="flex flex-col py-4 width-left-side-footer sm:justify-center sm:mx-auto sm:mb-12">
          <h2 className="text-dark-blue-first-section-cards font-bold text-3xl py-2 sm:justify-center sm:mx-auto">
            CFTBR
          </h2>
          <div className="sm:flex sm:justify-center sm:items-center sm:mx-8">
            <p className="color-for-footer-paragraph font-medium py-2 mb-4 sm:flex sm:text-center">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between px-8 gap-14 sm:flex-col sm:justify-center sm:gap-4 sm:px-0 lg:px-0">
          <div className="flex flex-col py-4 width-right-side-footer sm:mx-auto">
            <h3 className="py-2 text-black font-semibold text-xl sm:mx-auto">
              About
            </h3>
            <div className="color-for-footer-paragraph py-2 sm:mx-auto flex flex-col">
              <h4 className="py-2 sm:mx-auto">Hot it works</h4>
              <h4 className="py-2 sm:mx-auto">Featured</h4>
              <h4 className="py-2 sm:mx-auto">Partnership</h4>
              <h4 className="py-2 sm:mx-auto">Bussiness Relation</h4>
            </div>
          </div>
          <div className="flex flex-col py-4 width-right-side-footer sm:mx-auto">
            <h3 className="py-2 text-black font-semibold text-xl sm:mx-auto">
              Community
            </h3>
            <div className="color-for-footer-paragraph py-2 sm:mx-auto flex flex-col">
              <h4 className="py-2 sm:mx-auto">Events</h4>
              <h4 className="py-2 sm:mx-auto">Blog</h4>
              <h4 className="py-2 sm:mx-auto">Podcast</h4>
              <h4 className="py-2 sm:mx-auto">Invite a friend</h4>
            </div>
          </div>
          <div className="flex flex-col py-4 width-right-side-footer sm:mx-auto">
            <h3 className="py-2 text-black font-semibold text-xl sm:mx-auto">
              Socials
            </h3>
            <div className="color-for-footer-paragraph py-2 sm:mx-auto flex flex-col">
              <h4 className="py-2 sm:mx-auto">Discord</h4>
              <h4 className="py-2 sm:mx-auto">Instagram</h4>
              <h4 className="py-2 sm:mx-auto">Twitter</h4>
              <h4 className="py-2 sm:mx-auto">Facebook</h4>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-row justify-between py-8 sm:flex-col sm:py-3">
        <div className="sm:mx-auto sm:pb-2">
          ©2024 CFTBR. All rights reserved
        </div>
        <div className="flex flex-row gap-8 sm:flex-col sm:gap-2">
          <div className="sm:mx-auto">Privacy & Policy</div>
          <div className="sm:mx-auto">Terms & Condition</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
