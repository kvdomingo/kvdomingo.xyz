import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./Landing/Landing'));
const CurrVitae = lazy(() => import('./CurrVitae/CurrVitae'));
const Photography = lazy(() => import('./Photography/Photography'));
const Svip = lazy(() => import('./Svip/Svip'));
const SvipSubject = lazy(() => import('./Svip/Subject'));
const Dev = lazy(() => import('./Dev/Dev'));
const Err404 = lazy(() => import('./404'));


export default (
    <Switch> 
        <Route exact path='/' component={Home} />
        <Route exact path='/cv' component={CurrVitae} />
        <Route path='/photography' component={Photography} />
        <Route exact path='/svip' component={Svip} />
        <Route path='/svip/:courseSlug' component={SvipSubject} />
        <Route exact path='/dev' component={Dev} />

        <Route component={Err404} />
    </Switch>
);
