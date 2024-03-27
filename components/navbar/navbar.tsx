import React, { FC, useState } from "react";
import favoriteIcn from "../../images/imagesNavBar/favorite-icon.png";
import notificationIcn from "../../images/imagesNavBar/notification-icon.png";
import settingsIcn from "../../images/imagesNavBar/settings-icon.png";
import searchIcn from "../../images/imagesNavBar/search-icon.png";
import preferencesIcn from "../../images/imagesNavBar/preferences-icon.png";
import hamburgerBtn from "../../images/imagesNavBar/hamburger-menu.png";
import hamburgerCloseBtn from "../../images/imagesNavBar/hamburger-close-btn.png";

export interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const [hamburgerValue, setHamburgerValue] = useState(false);
  const [settingsValue, setSettingsValue] = useState(false);

  const handleSettingsValue = (event: any) => {
    event.preventDefault;
    setSettingsValue(!settingsValue);
  };

  const handlehamburgerValue = (event: any) => {
    event.preventDefault;
    setHamburgerValue(!hamburgerValue);
  };

  return (
    <div className="flex flex-row justify-between my-4 mx-4">
      <div className="flex flex-row gap-12">
        <div className="flex justify-center items-center text-3xl text-darky-blue font-bold">
          CFTBR
        </div>
        <div className="input-search-div rounded-3xl flex justify-center items-center px-6 gap-6 sm:hidden">
          <img src={searchIcn.src} alt="Search Button" />
          <input
            className="text-black bg-light-blue-leftside-section outline-none w-80 sm2:w-48"
            type="search"
            placeholder="Search something here"
          />
          <img src={preferencesIcn.src} alt="Preferences" />
        </div>
      </div>
      <div className="flex flex-row items-center gap-4 lg|sm:hidden">
        <div className="cover-navbar-icons flex items-center justify-center rounded-3xl cursor-pointer">
          <img src={favoriteIcn.src} alt="Favorite Button" />
        </div>
        <div className="cover-navbar-icons flex items-center justify-center rounded-3xl cursor-pointer">
          <img src={notificationIcn.src} alt="Notifications Button" />
        </div>
        <div>
          <div
            className="cover-navbar-icons flex items-center justify-center rounded-3xl cursor-pointer"
            onClick={handleSettingsValue}
          >
            <img src={settingsIcn.src} alt="Settings Button" />
          </div>
          <div
            className={`absolute z-10 border-black border-2 w-60 h-20 ${
              settingsValue ? "visible" : "hidden"
            }`}
          >
            ceva
          </div>
        </div>
      </div>
      <div
        className={`lg-sm:hidden lg|sm:visible ${
          hamburgerValue ? "hidden" : "visible"
        } `}
      >
        <div
          className="flex items-center justify-center cursor-pointer pl-6"
          onClick={handlehamburgerValue}
        >
          <img
            className="w-8 h-8"
            src={hamburgerBtn.src}
            alt="Hamburger Button"
          />
        </div>
      </div>
      {hamburgerValue ? (
        <div className="absolute w-1/2 height-100 right-0 top-0 bg-light-blue-leftside-section border-1px-solid-menu rounded-xl">
          <div className="flex flex-col">
            <div
              className="flex py-8 px-12 justify-end"
              onClick={handlehamburgerValue}
            >
              <img className="w-8 h-8" src={hamburgerCloseBtn.src} alt="" />
            </div>
            <div className="flex flex-col py-8 px-12 justify-end items-end">
              <div className="py-2">
                <div className="cover-navbar-icons flex items-center justify-center rounded-3xl cursor-pointer">
                  <img src={favoriteIcn.src} alt="Favorite Button" />
                </div>
              </div>
              <div className="py-2">
                <div className="cover-navbar-icons flex items-center justify-center rounded-3xl cursor-pointer">
                  <img src={notificationIcn.src} alt="Notifications Button" />
                </div>
              </div>
              <div className="py-2 right-0">
                <div
                  className="cover-navbar-icons flex items-center justify-center rounded-3xl cursor-pointer"
                  onClick={handleSettingsValue}
                >
                  <img src={settingsIcn.src} alt="Settings Button" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
