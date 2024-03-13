import React, { FC } from "react";
import pickUpDark from "../../images/containerFirstSection/selectionArea/pick-up-dark-blue.png";
import pickUpLight from "../../images/containerFirstSection/selectionArea/pick-up-light-blue.png";
import swapIcn from "../../images/containerFirstSection/selectionArea/swap-icon.png";

export interface SecondSectionContainerProps {}

const SecondSectionContainer: FC<SecondSectionContainerProps> = () => {
  return (
    <div className="py-8 flex flex-row justify-between lg:flex-col">
      <div>
        <div className="flex flex-row gap-2 sm:justify-center">
          <img
            className="flex items-center justify-center my-auto"
            src={pickUpDark.src}
            alt="Checkbox"
          />
          <label htmlFor="checkbox">Pick - Up</label>
        </div>
        <div className="flex flex-row justify-between gap-4 py-4 sm:flex-col sm:justify-center">
        <div className="sm:mx-auto sm:w-auto">
            <div className="px-1 sm:flex">Locations</div>
            <select className="outline-none bg-white-for-background" id="slect-date">
                <option value="Default">Select your city</option>
                <option value="Bucuresti">Bucuresti</option>
                <option value="Timisoara">Timisoara</option>
                <option value="Cluj Napoca">Cluj Napoca</option>
            </select>
        </div>
        <div className="horizontal-line-second-sec rounded-xl"></div>
        <div className="w-44 sm:mx-auto sm:w-auto">
            <div className="px-1">Date</div>
            <select className="outline-none bg-white-for-background" id="slect-date">
                <option value="Default">Select your date</option>
                <option value="data">13.02.2024</option>
                <option value="data">13.02.2024</option>
                <option value="data">14.02.2024</option>
                <option value="data">15.02.2024</option>
                <option value="data">16.02.2024</option>
                <option value="data">17.02.2024</option>
            </select>
        </div>
        <div className="horizontal-line-second-sec rounded-xl"></div>
        <div className="sm:w-auto sm:mx-auto">
            <div className="px-1 sm:mx-auto">Time</div>
            <select className="outline-none bg-white-for-background" id="slect-date">
                <option value="Default">Select your time</option>
                <option value="ora">12:00</option>
                <option value="ora">13:00</option>
                <option value="ora">14:00</option>
                <option value="ora">15:00</option>
                <option value="ora">16:00</option>
                <option value="ora">17:00</option>
            </select>
        </div>
        </div>
      </div>

        <div className="justify-center items-center m-auto sm:py-2">
            <button className="bg-dark-blue-first-section-cards rounded-xl p-6"><img src={swapIcn.src} alt="" /></button>
        </div>

      <div>
        <div className="flex flex-row gap-2 sm:justify-center">
          <img
            className="flex items-center justify-center my-auto"
            src={pickUpLight.src}
            alt="Checkbox"
          />
          <label htmlFor="checkbox">Drop - Off</label>
        </div>
        <div className="flex flex-row justify-between gap-4 py-4 sm:flex-col sm:justify-center">
        <div className="sm:w-auto sm:mx-auto">
            <div className="px-1">Locations</div>
            <select className="outline-none bg-white-for-background" id="slect-date">
                <option value="Default">Select your city</option>
                <option value="Bucuresti">Bucuresti</option>
                <option value="Timisoara">Timisoara</option>
                <option value="Cluj Napoca">Cluj Napoca</option>
            </select>
        </div>
        <div className="horizontal-line-second-sec rounded-xl"></div>
        <div className="w-44 sm:w-auto sm:mx-auto">
            <div className="px-1">Date</div>
            <select className="outline-none bg-white-for-background" id="slect-date">
                <option value="Default">Select your date</option>
                <option value="data">13.02.2024</option>
                <option value="data">13.02.2024</option>
                <option value="data">14.02.2024</option>
                <option value="data">15.02.2024</option>
                <option value="data">16.02.2024</option>
                <option value="data">17.02.2024</option>
            </select>
        </div>
        <div className="horizontal-line-second-sec rounded-xl"></div>
        <div className="sm:w-auto sm:mx-auto">
            <div className="px-1">Time</div>
            <select className="outline-none bg-white-for-background" id="slect-date">
                <option value="Default">Select your time</option>
                <option value="ora">12:00</option>
                <option value="ora">13:00</option>
                <option value="ora">14:00</option>
                <option value="ora">15:00</option>
                <option value="ora">16:00</option>
                <option value="ora">17:00</option>
            </select>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSectionContainer;
