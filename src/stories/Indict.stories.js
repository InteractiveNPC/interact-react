import React from "react";
import { getWithFullscreen } from "../services/storybookHelper";
import Indict from "../components/Indict";
import Indict2 from "../components/Indict/index2";
import Indict3 from "../components/Indict/index3";
import Twosis1 from "../components/Indict/twsister1";

export default {
    title: "Indict",
    component: Indict, Indict2
  };


  export const test = {
    render: () => getWithFullscreen(<Indict />)
  };
  
  export const test2 = {
    render: () => getWithFullscreen(<Indict2 />)
  };

  export const test3 = {
    render: () => getWithFullscreen(<Indict3 />)
  }; 

  export const test4 = {
    render: () => getWithFullscreen(<Twosis1 />)
  }; 