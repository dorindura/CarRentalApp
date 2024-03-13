import React, { FC } from "react";
import favoriteIcn from "../../images/imagesNavBar/favorite-icon.png";
import notificationIcn from "../../images/imagesNavBar/notification-icon.png";
import settingsIcn from "../../images/imagesNavBar/settings-icon.png";
import searchIcn from "../../images/imagesNavBar/search-icon.png";
import preferencesIcn from "../../images/imagesNavBar/preferences-icon.png";

export interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <div className="flex flex-row justify-between my-4">
        <div className="flex flex-row gap-12">
      <div className="flex justify-center items-center text-3xl text-darky-blue font-bold">CFTBR</div>
      <div className="input-search-div rounded-3xl flex justify-center items-center px-6 gap-6">
        <img src={searchIcn.src} alt="Search Button" />
        <input
          className="text-navbar-search-tcolor bg-white-for-background outline-none w-80"
          type="search"
          placeholder="Search something here"
        />
        <img src={preferencesIcn.src} alt="Preferences" />
      </div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div className="cover-navbar-icons flex items-center justify-center rounded-3xl">
          <img src={favoriteIcn.src} alt="Favorite Button" />
        </div>
        <div className="cover-navbar-icons flex items-center justify-center rounded-3xl">
          <img src={notificationIcn.src} alt="Notifications Button" />
        </div>
        <div className="cover-navbar-icons flex items-center justify-center rounded-3xl">
          <img src={settingsIcn.src} alt="Settings Button" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
