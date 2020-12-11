import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import {FastRender} from "meteor/staringatlights:fast-render"
import {HelmetProvider} from 'react-helmet-async';
import {preloadLoadables} from 'meteor/npdev:react-loadable'


FastRender.onPageLoad(async sink => {
    import Routes from "../../Routes/Routes";

    // start to preload loadables
    const promisables = preloadLoadables()

    // finish waiting
    await promisables
    const helmetContext = {}
    render(
        <HelmetProvider context={helmetContext}>
            <Router>
                <Routes/>
            </Router>
        </HelmetProvider>
        ,
        document.getElementById('App')
    );
});