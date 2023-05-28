import React from "react";
import { getWithFullscreen } from "../services/storybookHelper";
import Indict from "../components/Indict";
import Indict2 from "../components/Indict/index2";


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
  