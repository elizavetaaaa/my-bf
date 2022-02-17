import React from 'react';
import ReactDOM from 'react-dom';



// for this use : yarn add react-router-dom
import {BrowserRouter} from 'react-router-dom';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import './index.scss';

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            en: {
                translation: {
                    "Welcome to React": "Welcome to React and react-i18next"
                }
            },

            ru: {
                translation: {
                    "Welcome to React": "Добро пожаловать в React and react-i18next"
                }
            }
        },
        lng: document.querySelector('html').lang,
        fallbackLng: "en",

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });

function App() {
    const { t } = useTranslation();

    return <h2>{t('Welcome to React')}</h2>;
}



ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);


