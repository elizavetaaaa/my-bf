import React from 'react';
import {
    IoPersonCircleSharp,
    IoLayersSharp,
    IoAnalyticsOutline,
    IoPencil,
    IoCheckmarkCircleOutline,
    IoCheckmarkOutline
} from "react-icons/io5";
import {useNavigate} from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
    return (

        <div className="header">
            <div className="header__nav">
                <div className="header__person-div">
                    <div className="header__person-icon-div">
                        <IoPersonCircleSharp className="header__person-icon"/>
                    </div>

                    <p className="header__person-name">Айбек Айбеков</p>
                    <p className="haader__phone-number"> + 996 550 555 222</p>

                </div>

                <nav className="header__nav">
                    <ul className="header__ul">

                        <li className="header__li"
                            onClick={() => navigate('/creditList')}><IoLayersSharp className="header__li-icon"/>Список
                            кредитов</li>
                        <li className="header__li"
                            onClick={() => navigate('/rating')}><IoAnalyticsOutline className="header__li-icon"/>Рейтинг</li>
                        <li className="header__li"
                            onClick={() => navigate('/request')}><IoPencil className="header__li-icon"/>Заявка на кредит</li>
                        <li className="header__li"
                            onClick={() => navigate('/confirmCheck')}
                        ><IoCheckmarkCircleOutline className="header__li-icon"/>Подтверждение
                            проверки КИБ</li>
                        <li className="header__li"
                            onClick={() => navigate('/confirmSpouse')}
                        ><IoCheckmarkOutline className="header__li-icon"/>Подтверждение на
                            выдачу кредита супругу(е)</li>

                    </ul>

                </nav>
            </div>

        </div>
    );
};

export default Header;