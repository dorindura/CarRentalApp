import React, { FC } from "react";
import FirstSectionCards from "./firstSectionCards";
import SecondSectionContainer from "./secondSectionContainer";
import ThirdSectionContainer from "./thirdSectionContainer";

export interface ContainerProps {
  mockDataForMapping?:any;
}

const Container: FC<ContainerProps> = () => {
  return (
    <div className="my-8">
        <FirstSectionCards/>
        <SecondSectionContainer/>
        <ThirdSectionContainer/>
    </div>
  );
};

export default Container;
