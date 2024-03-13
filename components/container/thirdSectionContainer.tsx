import React, { FC, useState } from "react";
import CardForThirdSection from "./cardForThirdSection";
import favoriteIcn from "../../images/containerFirstSection/cardsSectionsImages/favoriteIcn.png";
import unFavoriteIcn from "../../images/containerFirstSection/cardsSectionsImages/unFavoriteIcn.png";
import koenigseggCar from "../../images/containerFirstSection/cardsSectionsImages/koenigsegg-car.png";
import nissanGTRCar from "../../images/containerFirstSection/cardsSectionsImages/nissang-gt-r-car.png";
import rollsRoyceCar from "../../images/containerFirstSection/cardsSectionsImages/rolls-royce-car.png";
import allNewRushCar from "../../images/containerFirstSection/cardsSectionsImages/all-new-rush-car.png";
import crVCar from "../../images/containerFirstSection/cardsSectionsImages/cr-v-car.png";
import allNewTeriosCar from "../../images/containerFirstSection/cardsSectionsImages/all-new-terios-car.png";
import crVBlackCar from "../../images/containerFirstSection/cardsSectionsImages/cr-v-black-car.png";
import mgZXExclusiceCar from "../../images/containerFirstSection/cardsSectionsImages/mg-zg-exclusive-car.png";
import mgZSWhiteCar from "../../images/containerFirstSection/cardsSectionsImages/new-mg-zs-white-car.png";
import mgZXExcite from "../../images/containerFirstSection/cardsSectionsImages/mg-zx-excite-car.png";
import mgZSGreyCar from "../../images/containerFirstSection/cardsSectionsImages/new-mg-zs-grey-car.png";
import fuelIcon from "../../images/containerFirstSection/cardsSectionsImages/fuel-icon.png";
import gearIcon from "../../images/containerFirstSection/cardsSectionsImages/gear-icon.png";
import seatsIcon from "../../images/containerFirstSection/cardsSectionsImages/seats-icon.png";

export interface ThirdSectionContainerProps {
  mockDataForMapping?: any;
}

let MOCK_DATA = [
  {
    id: "1",
    name: "Koenigsegg",
    favorite1: favoriteIcn,
    favorite2: unFavoriteIcn.src,
    typeOf: "Sport",
    imageOfCar: koenigseggCar.src,
    fuelCapacity: fuelIcon.src,
    gearType: gearIcon.src,
    seatsNumber: seatsIcon.src,
    fuelCapacityValue: "90L",
    geatTypeValue: "Manual",
    seatsNumberValue: "2 People",
    pricePerDay: "$99.00/",
    preferencesValue: true,
  },
  {
    id: "2",
    name: "Nissang GT-R",
    favorite1: favoriteIcn,
    favorite2: unFavoriteIcn.src,
    typeOf: "Sport",
    imageOfCar: nissanGTRCar.src,
    fuelCapacity: fuelIcon.src,
    gearType: gearIcon.src,
    seatsNumber: seatsIcon.src,
    fuelCapacityValue: "80L",
    geatTypeValue: "Manual",
    seatsNumberValue: "2 People",
    pricePerDay: "$80.00/",
    initialPrice: "$100.00",
    preferencesValue: false,
  },
  {
    id: "3",
    name: "Rolls-Royce",
    favorite1: favoriteIcn,
    favorite2: unFavoriteIcn.src,
    typeOf: "Sedan",
    imageOfCar: rollsRoyceCar.src,
    fuelCapacity: fuelIcon.src,
    gearType: gearIcon.src,
    seatsNumber: seatsIcon.src,
    fuelCapacityValue: "70L",
    geatTypeValue: "Manual",
    seatsNumberValue: "4 People",
    pricePerDay: "$96.00/",
    preferencesValue: true,
  },
  {
    id: "4",
    name: "Nissang GT-R",
    favorite1: favoriteIcn,
    favorite2: unFavoriteIcn.src,
    typeOf: "Sport",
    imageOfCar: nissanGTRCar.src,
    fuelCapacity: fuelIcon.src,
    gearType: gearIcon.src,
    seatsNumber: seatsIcon.src,
    fuelCapacityValue: "80L",
    geatTypeValue: "Manual",
    seatsNumberValue: "2 People",
    pricePerDay: "$80.00/",
    initialPrice: "$100.00",
    preferencesValue: false,
  },
  {
    id: "5",
    name: "All New Rush",
    favorite1: favoriteIcn,
    favorite2: unFavoriteIcn.src,
    typeOf: "SUV",
    imageOfCar: allNewRushCar.src,
    fuelCapacity: fuelIcon.src,
    gearType: gearIcon.src,
    seatsNumber: seatsIcon.src,
    fuelCapacityValue: "70L",
    geatTypeValue: "Manual",
    seatsNumberValue: "6 People",
    pricePerDay: "$72.00/",
    initialPrice: "$80.00",
    preferencesValue: false,
  },
  {
    id: "6",
    name: "CR - V",
    favorite1: favoriteIcn,
    favorite2: unFavoriteIcn.src,
    typeOf: "SUV",
    imageOfCar: crVCar.src,
    fuelCapacity: fuelIcon.src,
    gearType: gearIcon.src,
    seatsNumber: seatsIcon.src,
    fuelCapacityValue: "80L",
    geatTypeValue: "Manual",
    seatsNumberValue: "6 People",
    pricePerDay: "$80.00/",
    preferencesValue: true,
  },
  {
    id: "7",
    name: "All New Terios",
    favorite1: favoriteIcn,
    favorite2: unFavoriteIcn.src,
    typeOf: "SUV",
    imageOfCar: allNewTeriosCar.src,
    fuelCapacity: fuelIcon.src,
    gearType: gearIcon.src,
    seatsNumber: seatsIcon.src,
    fuelCapacityValue: "90L",
    geatTypeValue: "Manual",
    seatsNumberValue: "6 People",
    pricePerDay: "$74.00/",
    preferencesValue: false,
  },
  {
    id: "8",
    name: "CR - V",
    favorite1: favoriteIcn,
    favorite2: unFavoriteIcn.src,
    typeOf: "SUV",
    imageOfCar: crVBlackCar.src,
    fuelCapacity: fuelIcon.src,
    gearType: gearIcon.src,
    seatsNumber: seatsIcon.src,
    fuelCapacityValue: "80L",
    geatTypeValue: "Manual",
    seatsNumberValue: "6 People",
    pricePerDay: "$80.00/",
    preferencesValue: true,
  },
  {
    id: "9",
    name: "MG ZX Exclusice",
    favorite1: favoriteIcn,
    favorite2: unFavoriteIcn.src,
    typeOf: "Hatchback",
    imageOfCar: mgZXExclusiceCar.src,
    fuelCapacity: fuelIcon.src,
    gearType: gearIcon.src,
    seatsNumber: seatsIcon.src,
    fuelCapacityValue: "70L",
    geatTypeValue: "Manual",
    seatsNumberValue: "4 People",
    pricePerDay: "$76.00/",
    initialPrice: "$80.00",
    preferencesValue: true,
  },
  {
    id: "10",
    name: "New MG ZS",
    favorite1: favoriteIcn,
    favorite2: unFavoriteIcn.src,
    typeOf: "SUV",
    imageOfCar: mgZSWhiteCar.src,
    fuelCapacity: fuelIcon.src,
    gearType: gearIcon.src,
    seatsNumber: seatsIcon.src,
    fuelCapacityValue: "80L",
    geatTypeValue: "Manual",
    seatsNumberValue: "6 People",
    pricePerDay: "$80.00/",
    preferencesValue: false,
  },
  {
    id: "11",
    name: "MG ZX Excite",
    favorite1: favoriteIcn,
    favorite2: unFavoriteIcn.src,
    typeOf: "Hatchback",
    imageOfCar: mgZXExcite.src,
    fuelCapacity: fuelIcon.src,
    gearType: gearIcon.src,
    seatsNumber: seatsIcon.src,
    fuelCapacityValue: "90L",
    geatTypeValue: "Manual",
    seatsNumberValue: "4 People",
    pricePerDay: "$74.00/",
    preferencesValue: true,
  },
  {
    id: "12",
    name: "New MG ZS",
    favorite1: favoriteIcn,
    favorite2: unFavoriteIcn.src,
    typeOf: "SUV",
    imageOfCar: mgZSGreyCar.src,
    fuelCapacity: fuelIcon.src,
    gearType: gearIcon.src,
    seatsNumber: seatsIcon.src,
    fuelCapacityValue: "80L",
    geatTypeValue: "Manual",
    seatsNumberValue: "6 People",
    pricePerDay: "$80.00/",
    preferencesValue: false,
  },
];

const ThirdSectionContainer: FC<ThirdSectionContainerProps> = () => {
  const [mockDataForMapping] = useState(MOCK_DATA);

  return (
    <div className="py-8 flex flex-col">
      <div className="flex flex-row px-4 justify-between">
        <div>
          <button className="text-grey-for-cards font-semibold">Popular Car</button>
        </div>
        <div>
          <button className="text-dark-blue-first-section-cards font-semibold">View All</button>
        </div>
      </div>
      <div className="flex flex-wrap gap-for-cards items-center justify-between mt-8 sm:flex-col">
        {mockDataForMapping.map((item) => {
          return (
            <CardForThirdSection
              id={item.id}
              key={item.id}
              name={item.name}
              favorite1={item.favorite1}
              favorite2={item.favorite2}
              typeOfCar={item.typeOf}
              imageOfCar={item.imageOfCar}
              gearType={item.gearType}
              seatsNumber={item.seatsNumber}
              fuelCapacity={item.fuelCapacity}
              fuelCapacityValue={item.fuelCapacityValue}
              geatTypeValue={item.geatTypeValue}
              seatsNumberValue={item.seatsNumberValue}
              pricePerDay={item.pricePerDay}
              initialPrice={item.initialPrice}
              preferncesValueState={item.preferencesValue}
            />
          );
        })}
      </div>
      <div className="flex items-center justify-center pt-16"><button className="bg-dark-blue-first-section-cards py-2 px-4 text-white text-lg rounded-lg">Show more car</button></div>
    </div>
  );
};

export default ThirdSectionContainer;
