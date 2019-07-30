import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {Constatns} from "./helper/Constants";
// not like to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init
let backendOptions = {
    loadPath: Constatns.TRANLATION_URL,
    crossDomain: true,
    withCredentials: true,
    ajax: function (url, options, callback, data) {
        console.log('url:' , url , '\ndata: ', data);
        let urlFinal = new URL(url);
        let params = {...options.queryStringParams};
        Object.keys(params).forEach(key => urlFinal.searchParams.append(key, params[key]))
        fetch(urlFinal).then(result=>result.json()).then(translations =>{
            console.log(translations);
            let dataObj = {};
            if(!translations){
                console.log('no Translations response from backend! ')
                callback(null,{status:502});
            }
            translations.forEach(trans=>{
                if(trans.lang === params.lang)
                dataObj[trans.textCode] = trans.translation;
            });
            callback(JSON.stringify(dataObj),{status:200});
        }).catch(err=>{
            console.log(err);
            callback(null,{status:502});
        })
    },
    queryStringParams: {
        system:'sis',
        lang:'en'
    }
};
i18n
// load translation using xhr -> see /public/locales
// learn more: https://github.com/i18next/i18next-xhr-backend
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    // .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        fallbackLng: 'en',
        debug: true,
        backend: backendOptions,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    });


export default i18n;