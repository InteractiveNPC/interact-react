import * as React from 'react';
import Indict2 from "./index2";
import HelloWorld from './helloWorld';
import HelloReact from './helloReact';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';


function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="./index2" element={<Indict2 />} />
        </Routes>
    </BrowserRouter>
    );

}

export default App;