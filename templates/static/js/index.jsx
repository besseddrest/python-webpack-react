import React from 'react';
import ReactDOM from 'react-dom';
import routes from "./routes";
import $ from 'jquery';
import 'foundation-sites';
import '../scss/style.scss';

ReactDOM.render(routes, document.getElementById("content"));