import React, { FC, useState } from "react";

export interface CardForThirdSectionProps {
  id?: any;
  name?: any;
  favorite1?: any;
  favorite2?: any;
  typeOfCar?: any;
  imageOfCar?: any;
  gearType?: any;
  seatsNumber?: any;
  fuelCapacity?: any;
  fuelCapacityValue?: any;
  geatTypeValue?: any;
  seatsNumberValue?: any;
  pricePerDay?: any;
  initialPrice?: any;
  preferncesValueState?: any;
}

const CardForThirdSection: FC<CardForThirdSectionProps> = ({
  id,
  name,
  favorite1,
  favorite2,
  typeOfCar,
  seatsNumber,
  gearType,
  imageOfCar,
  fuelCapacity,
  fuelCapacityValue,
  geatTypeValue,
  seatsNumberValue,
  pricePerDay,
  initialPrice,
  preferncesValueState,
}) => {
  const [favoriteValue, setFavoriteValue] = useState(preferncesValueState);

  const HandleFavorieValue = () => {
    setFavoriteValue(!favoriteValue);
  };

  return (
    <div className="flex flex-col sizes-for-card-third-section bg-white rounded-lg">
      <div className="p-4 sizes-for-card-third-section">
        <div className="flex flex-row justify-between">
          <div className="flex item-center text-xl font-bold py-1">{name}</div>
          <div className="flex item-center my-auto py-1">
            <button onClick={HandleFavorieValue}>
              <img
                src={favoriteValue ? favorite1.src : favorite2}
                alt="Favorite Icon"
              />
            </button>
          </div>
        </div>
        <div className="text-grey-for-cards font-semibold py-1">
          {typeOfCar}
        </div>
        <div className="flex justify-center items-center mx-auto my-10 sizes-for-card-photo-thrd-sec">
          <img src={imageOfCar} alt="Images Of Cars" />
        </div>
        <div className="flex flex-row items-center gap-2 py-2 justify-center">
          <div className="flex flex-row gap-2">
            <img src={fuelCapacity} alt="Fuel Icon" />
            {fuelCapacityValue}
          </div>
          <div className="flex flex-row">
            <img src={gearType} alt="Gear Icon" />
            {geatTypeValue}
          </div>
          <div className="flex flex-row">
            <img src={seatsNumber} alt="Seats Icon" />
            {seatsNumberValue}
          </div>
        </div>
        <div className="flex flex-row items-center gap-4 py-2 justify-center">
          <div>
            <div className="font-bold text-xl">
              {pricePerDay}
              <span className="font-semibold px-1 text-base text-grey-for-cards">
                day
              </span>
            </div>
            {initialPrice ? (
              <div>
                <span className="text-grey-for-cards font-semibold line-through">
                  {initialPrice}
                </span>
              </div>
            ) : null}
          </div>
          <div className="bg-dark-blue-first-section-cards text-white text-xl py-2 px-4 rounded-lg">
            <button>Rent Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardForThirdSection;
