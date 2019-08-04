import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './i18n'
import * as serviceWorker from './serviceWorker';
import './external/circular-css.css';
import './external/lightbox.min.css';
import './external/bootstrap.css'
import './external/bootstrap-slider.min.css';
import './external/zabuto_calendar.min.css';
import './external/owl.carousel.css';
import './external/bootstrap-select.min.css';
import './external/fileinput.min.css';
import './external/trackpad-scroll-emulator.css';
import './external/jquery.nouislider.min.css';
import './external/style.css';
import Loader from "./components/Loader";

ReactDOM.render(
    <Suspense fallback={<Loader/>}>
        <App/>
    </Suspense>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
