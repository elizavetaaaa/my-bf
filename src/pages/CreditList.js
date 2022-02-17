import React from 'react';
import Header from "../components/Header";

const CreditList = () => {

    const graphicClick = () => {
        document.getElementById('graphic').style.background ='#5d8cff80';
        document.getElementById('payment').style.background ='#5d8cff20';
        document.getElementById('debt').style.background ='#5d8cff20';

    }
    const paymentClick = () => {
        document.getElementById('graphic').style.background ='#5d8cff20';
        document.getElementById('payment').style.background ='#5d8cff80';
        document.getElementById('debt').style.background ='#5d8cff20';
    }
    const debtClick = () => {
        document.getElementById('graphic').style.background ='#5d8cff20';
        document.getElementById('payment').style.background ='#5d8cff20';
        document.getElementById('debt').style.background ='#5d8cff80';
    }

    return (
        <div className="creditList">
            <Header/>
            <div className="creditList__content">
                <h2 className="creditList__title">Список кредитов</h2>

                <div className="creditList__tabs">
                    <button className="creditList__tab-btn" id="graphic"
                            onClick={() => graphicClick()}
                    >
                        График платежей
                    </button>
                    <button className="creditList__tab-btn" id="payment"
                            onClick={() => paymentClick()}
                    >Оплаты</button>
                    <button className="creditList__tab-btn" id="debt"
                            onClick={() => debtClick()}
                    >Наличие задолженностей</button>
                </div>
            </div>

        </div>
    );
};

export default CreditList;