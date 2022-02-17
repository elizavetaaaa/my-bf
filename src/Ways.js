import React from 'react';
import {Route, Routes} from "react-router-dom";
import CreditList from "./pages/CreditList";
import Home from "./pages/Home";
import ConfirmSpouse from "./pages/ConfirmSpouse";
import ConfirmCheck from "./pages/ConfirmCheck";
import Rating from "./pages/Rating";
import Request from "./pages/Request";

const Ways = () => {
    return (
        <div>
            <Routes>
                <Route  exact path="/" element={<Home/>}/>
                <Route  path='/creditList' element={<CreditList/>} />
                <Route  path='/rating' element={<Rating/>} />
                <Route  path='/request' element={<Request/>} />
                <Route  path='/confirmCheck' element={<ConfirmCheck/>} />
                <Route  path='/confirmSpouse' element={<ConfirmSpouse/>} />
            </Routes>


        </div>
    );
};

export default Ways;