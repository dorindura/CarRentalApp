import React, { FC } from "react";
import leftSideCar from "../../images/containerFirstSection/firstSectionImages/left-side-car.png";
import rightSideCar from "../../images/containerFirstSection/firstSectionImages/right-side-car.png";

export interface FirstSectionCardsProps {

}

const FirstSectionCards: FC<FirstSectionCardsProps> = () => {
    return (
        <div className="flex flex-row justify-between sm:flex-col sm:gap-4">
        <div className="bg-photo-light-blue cards-first-section rounded-lg flex flex-col p-4 gap-4 lg:cards-first-section-media-query sm:mx-auto">
          <div>
            <h2 className="width-h2-f-section-cards text-3xl text-white">
              The Best Platform For Car Rental
            </h2>
            <p className="width-p-f-section-cards text-white">
              Ease of doing a car rental safely and reliably. Of course at a low
              price
            </p>
          </div>
          <div>
            <button className="bg-dark-blue-first-section-cards text-white px-4 py-2 rounded-md">
              Rental Car
            </button>
          </div>
          <div className="flex justify-end pr-11 pt-2 lg:justify-center lg:px-0">
            <img src={leftSideCar.src} alt="Left Side Car" />
          </div>
        </div>
        <div className="bg-photo-dark-blue cards-first-section rounded-lg flex flex-col p-4 gap-4 sm:mx-auto">
            <div>
              <h2 className="width-h2-f-section-cards text-3xl text-white">
                Easy way to rent a car at a low price
              </h2>
              <p className="width-p-f-section-cards text-white">
                Providing cheap car rental services and safe and comfortable facilities
              </p>
            </div>
            <div>
              <button className="bg-light-blue-first-section-cards text-white px-4 py-2 rounded-md">
                Rental Car
              </button>
            </div>
            <div className="flex justify-end pr-11 pt-2 lg:justify-center lg:px-0">
              <img src={rightSideCar.src} alt="Left Side Car" />
            </div>
        </div>
      </div>
    )
};

export default FirstSectionCards;