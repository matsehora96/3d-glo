'use stcrict';
import "@babel/polyfill";
import 'nodelist-foreach-polyfill';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changeImages from './modules/changeImages';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

//Timer
countTimer('19 july 2020');

//Menu
toggleMenu();

//popup
togglePopup();

//Tabs
tabs();

//Slider
slider();

//Data images
changeImages();

//Calculator
calc(100);

//send-ajax=form
sendForm();